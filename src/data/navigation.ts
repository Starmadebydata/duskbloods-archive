export const primaryNav = [
  { href: '/', label: 'Home' },
  { href: '/network-test/', label: 'Network Test' },
  { href: '/gameplay/', label: 'Gameplay' },
  { href: '/characters/', label: 'Characters' },
  { href: '/release-date/', label: 'Release' }
] as const;

export const moreNav = [
  { href: '/weapons-and-powers/', label: 'Weapons & Powers' },
  { href: '/kin/', label: 'Kin' },
  { href: '/systems/', label: 'Systems' },
  { href: '/switch-2/', label: 'Switch 2' },
  { href: '/editorial-policy/', label: 'Editorial Policy' }
] as const;

export const mobileGroups = [
  {
    label: 'Core Guides',
    items: [
      { href: '/network-test/', label: 'Network Test' },
      { href: '/network-test/errors/', label: 'Login and server errors' },
      { href: '/gameplay/', label: 'Gameplay' },
      { href: '/characters/', label: 'Characters' },
      { href: '/release-date/', label: 'Release date' }
    ]
  },
  {
    label: 'Game Systems',
    items: [
      { href: '/weapons-and-powers/', label: 'Weapons & Powers' },
      { href: '/kin/', label: 'Kin' },
      { href: '/systems/', label: 'Virtue, Alliances, Sigils' },
      { href: '/switch-2/', label: 'Switch 2, online, solo' }
    ]
  },
  {
    label: 'Site',
    items: [
      { href: '/editorial-policy/', label: 'Editorial Policy' },
      { href: '/corrections/', label: 'Corrections' },
      { href: '/about/', label: 'About' },
      { href: '/contact/', label: 'Contact' }
    ]
  }
] as const;

export const guideIndex = [
  { href: '/network-test/', title: 'Network Test recap', summary: 'Schedule, results, and what players can still do.' },
  { href: '/gameplay/', title: 'How a match works', summary: 'House of Night to Final Phase, in order.' },
  { href: '/characters/', title: 'Bloodsworn and abilities', summary: 'The six Network Test characters, with official names.' },
  { href: '/release-date/', title: 'Release date status', summary: 'Officially 2026. September 24 has been denied.' },
  { href: '/weapons-and-powers/', title: 'Weapons, upgrades, Powers of Blood', summary: 'Confirmed weapons and enhancement rules, no invented stats.' },
  { href: '/kin/', title: 'Kin: Ring, Blade, Eye', summary: 'Eight test-build Kin and three summoning circles.' },
  { href: '/systems/', title: 'Virtue, Alliances, Sigils', summary: 'How ranking, pacts, and marks change a match.' },
  { href: '/switch-2/', title: 'Switch 2, online, and solo', summary: 'Platform, membership, and what is still unknown.' }
] as const;
