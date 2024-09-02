import { IHospitalType } from '../types';
import { axiosInstance } from './axios';

const HospitalAPI = {
  getHospitalTypes: async (): Promise<IHospitalType[]> => {
    const { data } = await axiosInstance.get('hospitalTypes');
    return data;
  },
};

export default HospitalAPI;
