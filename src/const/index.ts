//const

export const stateTypes = {
  IN_PROGRESS: '진료중',
  CLOSING_SOON: '곧마감',
  CLOSED: '진료마감',
} as const;

export type StateTypes = typeof stateTypes;

export const dayTypes = {
  SUN: '일요일',
  MON: '월요일',
  TUE: '화요일',
  WED: '수요일',
  THU: '목요일',
  FRI: '금요일',
  SAT: '토요일',
  HOL: '공휴일',
} as const;

export type DayTypes = typeof dayTypes;
export type IDutyDateType = keyof DayTypes;
export const DayTypeKeys = Object.keys(dayTypes) as IDutyDateType[];
