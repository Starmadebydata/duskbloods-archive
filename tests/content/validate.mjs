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
const required = [
  'title','description','slug','pageType','primaryIntent','status',
  'publishedAt','updatedAt','lastCheckedAt','primarySource','primarySourceUrl',
  'directAnswer','relatedSlugs','draft','noindex'
];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const files = walk(root).filter((file) => file.endsWith('.md'));
const slugs = [];
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
  if (/2026-09-24/.test(text) && !file.includes('release-date')) {
    console.error('Denied date leaked outside release page', file);
    failed += 1;
  }
}

for (const slug of requiredPages) {
  if (!slugs.includes(slug)) {
    console.error('Missing launch slug', slug || '(home)');
    failed += 1;
  }
}

if (failed) {
  console.error(`Validation failed with ${failed} issue(s)`);
  process.exit(1);
}
console.log(`Validated ${files.length} content files and ${requiredPages.length} launch slugs`);
