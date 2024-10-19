/**
 * TODO 타입정리
 */

import { IDutyDateType } from '../const';

//type
export interface IHospitalType {
  id: string;
  name: string;
}

export interface IDutyDate {
  day: IDutyDateType;
  time: string | null;
}

export interface IHospitals {
  id: string;
  type: {
    id: string;
    name: string;
  };
  name: string;
  x: number;
  y: number;
  isDuty: boolean;
  dutyDate: [{ day: IDutyDateType; time: string | null }];
  state?: string;
  address: string;
  tel: string;
}
