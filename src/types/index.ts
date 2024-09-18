//type
export interface IHospitalType {
  id: string;
  name: string;
}

export interface IDutyDate {
  day: string;
  time: string;
}

export interface IBasicHospitalData {
  id: string;
  type: IHospitalType;
  name: string;
  x: number;
  y: number;
}

export interface IHospital {
  hospitalInfo: IBasicHospitalData;
  isDuty: boolean;
  dutyDate: {
    day: string;
    time: string;
  };
  state: '진료중' | '곧마감' | '진료마감';
}

//IHospital에서 확장해서 사용해야??
export interface IHospitalInfo {
  hospitalInfo: IBasicHospitalData;
  address: string;
  tel: string;
  dutyDates: IDutyDate[];
}

//
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
  dutyDate: [{ day: string; time: string | null }];
  state?: string;
}
