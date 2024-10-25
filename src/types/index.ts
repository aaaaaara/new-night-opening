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
  address: string;
  isDuty: boolean;
  state: string;
  tel: string;
  startTime: string;
  endTime: string;
  dutyDate: [{ day: IDutyDateType; time: string | null }];
}
