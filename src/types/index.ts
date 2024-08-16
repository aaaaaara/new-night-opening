//type
export interface IHospitalType {
  id: string;
  name: string;
}

export interface IDutyDate {
  day: string;
  time: string;
}

export interface IHospital {
  id: string;
  type: IHospitalType;
  name: string;
  x: number;
  y: number;
  isDuty: boolean;
  dutyDate: {
    day: string;
    time: string;
  };
  state: '진료중' | '곧마감' | '진료마감';
}

export interface IHospitalInfo {
  id: string;
  name: string;
  type: IHospitalType;
  address: string;
  tel: string;
  dutyDates: IDutyDate[];
  x: number;
  y: number;
}
