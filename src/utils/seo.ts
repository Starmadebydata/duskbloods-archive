export function absoluteUrl(path: string) {
  return new URL(path, 'https://duskbloodsarchive.com').toString();
}
