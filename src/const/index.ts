//const

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
