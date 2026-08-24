import fallback from '../data/fallback-status.json';

export type SiteStatus = {
  state: 'normal' | 'monitoring' | 'incident' | 'concluded';
  headline: string;
  summary: string;
  updatedAt: string;
  sourceUrl: string;
  sourceLabel: string;
  nextCheckAt: string;
};

const TIMEOUT_MS = 800;

export async function getSiteStatus(): Promise<SiteStatus> {
  try {
    const mod = await import('cloudflare:workers');
    const env = (mod as { env?: { SITE_STATUS?: { get: Function } } }).env;
    if (!env?.SITE_STATUS) return fallback as SiteStatus;
    const record = await Promise.race([
      env.SITE_STATUS.get('current', { type: 'json' }),
      new Promise((_, reject) => setTimeout(() => reject(new Error('status-timeout')), TIMEOUT_MS))
    ]);
    if (record && typeof record === 'object' && 'headline' in record) {
      return record as SiteStatus;
    }
  } catch {
    return fallback as SiteStatus;
  }
  return fallback as SiteStatus;
}

export function formatChecked(value: string) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [year, month, day] = value.split('-').map(Number);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC'
    }).format(new Date(Date.UTC(year, month - 1, day)));
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'America/Los_Angeles'
  }).format(date);
}
