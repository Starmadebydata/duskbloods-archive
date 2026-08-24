/**
 * Submit published URLs to IndexNow (Bing and other participating engines).
 *
 * Usage:
 *   npm run indexnow
 *
 * The key file must already be live at https://duskbloodsarchive.com/{key}.txt
 * @see https://www.bing.com/indexnow/getstarted
 */
const SITE = 'https://duskbloodsarchive.com';
const HOST = 'duskbloodsarchive.com';
const DEFAULT_KEY = '1a164063a4fa44249e6c9230c2bf67f5';
const KEY = (process.env.INDEXNOW_KEY || DEFAULT_KEY).trim();
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const SITEMAP = `${SITE}/sitemap-0.xml`;

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP, {
    headers: { 'User-Agent': 'DuskbloodsArchive-IndexNow/1.0' }
  });
  if (!res.ok) throw new Error(`sitemap HTTP ${res.status}`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (!urls.length) throw new Error('sitemap had no URLs');
  return urls;
}

async function submit(urlList) {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'User-Agent': 'DuskbloodsArchive-IndexNow/1.0'
    },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList
    })
  });
  const text = await res.text().catch(() => '');
  return { status: res.status, text: text.slice(0, 400) };
}

async function main() {
  console.log('IndexNow key:', KEY);
  console.log('Key location:', KEY_LOCATION);
  const probe = await fetch(KEY_LOCATION, { method: 'GET' });
  const body = (await probe.text()).trim();
  if (!probe.ok || body !== KEY) {
    console.error(`Key file not live (HTTP ${probe.status}, body=${JSON.stringify(body.slice(0, 80))}). Deploy public/${KEY}.txt first.`);
    process.exit(1);
  }
  console.log('Key file OK');
  const urls = [...new Set(await fetchSitemapUrls())].filter((u) => u.startsWith(SITE));
  console.log(`Submitting ${urls.length} URL(s)`);
  const { status, text } = await submit(urls);
  if (status === 200 || status === 202) {
    console.log(`IndexNow accepted HTTP ${status}`);
    return;
  }
  console.error(`IndexNow HTTP ${status} ${text}`);
  process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
