export interface MoonPhase {
  emoji: string,
  name: string,
  phase: number,
}

export const MOON_PHASES: MoonPhase[] = [
  {
    emoji: '🌑',
    name: 'New Moon',
    phase: 0,
  },
  {
    emoji: '🌒',
    name: 'Waxing crescent',
    phase: 0.125,
  },
  {
    emoji: '🌓',
    name: 'First quarter',
    phase: 0.25,
  },
  {
    emoji: '🌔',
    name: 'Waxing gibbous',
    phase: 0.375
  },
  {
    emoji: '🌕',
    name: 'Full Moon',
    phase: 0.5,
  },
  {
    emoji: '🌖',
    name: 'Waning gibbous',
    phase: 0.625,
  },
  {
    emoji: '🌗',
    name: 'Third quarter',
    phase: 0.75,
  },
  {
    emoji: '🌘',
    name: 'Waning crescent',
    phase: 0.875,
  },
];
