import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('src/content');
const requiredPages = [
  '',
  'network-test',
  'network-test-errors',
  'gameplay',
  'release-date',
  'characters',
  'weapons-and-powers',
  'kin',
  'systems',
  'switch-2'
];
const requiredTrust = ['about', 'contact', 'privacy', 'disclaimer', 'editorial-policy', 'corrections'];
const required = [
  'title','description','slug','pageType','primaryIntent','status',
  'publishedAt','updatedAt','lastCheckedAt','primarySource','primarySourceUrl',
  'directAnswer','relatedSlugs','draft','noindex'
];
const forbidden = [/coming soon/i, /lorem ipsum/i, /click here to support us/i, /placeholder page/i];
const AI_STYLE = [
  ['em dash', /—/],
  ['en dash', /–/],
  ['curly quote', /[“”‘’]/],
  ['ai vocabulary', /\b(additionally|crucial|pivotal|delve|showcase|underscore|garner|intricate|interplay|tapestry|testament|vibrant|landscape|fostering|enhance|align with|highlighting|in order to|it is important to note|not only|plays a key role)\b/i]
];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function bodyText(text) {
  const end = text.indexOf('\n---', 3);
  return text.slice(end + 4).replace(/[#>*_`\[\]()]/g, ' ').replace(/\s+/g, ' ').trim();
}

function field(fm, name) {
  const quoted = fm.match(new RegExp('^' + name + ':\s*"([^"]*)"', 'm'));
  if (quoted) return quoted[1].trim();
  const bare = fm.match(new RegExp('^' + name + ':\s*([^\n]+)', 'm'));
  return bare ? bare[1].replace(/\s+/g, ' ').trim() : '';
}

const files = walk(root).filter((file) => file.endsWith('.md'));
const slugs = [];
const intents = new Map();
let failed = 0;

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  if (!text.startsWith('---')) {
    console.error('Missing front matter', file);
    failed += 1;
    continue;
  }
  const fm = text.slice(3, text.indexOf('\n---', 3));
  for (const key of required) {
    if (!fm.includes(`${key}:`)) {
      console.error(`Missing ${key} in ${file}`);
      failed += 1;
    }
  }
  if (!fm.includes('sources:')) {
    console.error('Missing sources', file);
    failed += 1;
  }
  const slugMatch = fm.match(/slug:\s*"([^"]*)"/);
  if (slugMatch) slugs.push(slugMatch[1]);
  const intent = field(fm, 'primaryIntent');
  if (intent) {
    if (intents.has(intent)) {
      console.error('Duplicate primaryIntent', intent, file, 'also', intents.get(intent));
      failed += 1;
    } else {
      intents.set(intent, file);
    }
  }
  const pageType = field(fm, 'pageType');
  const words = bodyText(text).split(' ').filter(Boolean).length;
  const minWords = file.includes('/policies/') ? 80 : 120;
  if (pageType !== 'home' && words < minWords) {
    console.error(`Thin body (${words} words, min ${minWords})`, file);
    failed += 1;
  }
  for (const pattern of forbidden) {
    if (pattern.test(text)) {
      console.error('Forbidden pattern', pattern, file);
      failed += 1;
    }
  }
  if (/2026-09-24/.test(text) && !file.includes('release-date')) {
    console.error('Denied date leaked outside release page', file);
    failed += 1;
  }
  for (const [label, pattern] of AI_STYLE) {
    if (pattern.test(text)) {
      console.error('Style issue:', label, file);
      failed += 1;
    }
  }
}

for (const slug of [...requiredPages, ...requiredTrust]) {
  if (!slugs.includes(slug)) {
    console.error('Missing required slug', slug || '(home)');
    failed += 1;
  }
}

const about = fs.readFileSync(path.join(root, 'policies/about.md'), 'utf8');
const contact = fs.readFileSync(path.join(root, 'policies/contact.md'), 'utf8');
const privacy = fs.readFileSync(path.join(root, 'policies/privacy.md'), 'utf8');
if (!about.includes('Wind Flash Studio')) {
  console.error('About page must name Wind Flash Studio');
  failed += 1;
}
if (!contact.includes('contact@duskbloodsarchive.com')) {
  console.error('Contact page must include contact@duskbloodsarchive.com');
  failed += 1;
}
if (!/cookie/i.test(privacy) || !/google/i.test(privacy) || !/ads/i.test(privacy)) {
  console.error('Privacy page must disclose cookies and Google ads');
  failed += 1;
}

if (failed) {
  console.error(`Validation failed with ${failed} issue(s)`);
  process.exit(1);
}
console.log(`Validated ${files.length} content files, ${requiredPages.length} launch slugs, and trust-page architecture`);
