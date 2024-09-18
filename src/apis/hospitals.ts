import { IHospital, IHospitals, IHospitalType } from '../types';
import { axiosInstance } from './axios';

const HospitalAPI = {
  getHospitalTypes: async (): Promise<IHospitalType[]> => {
    const { data } = await axiosInstance.get('hospitalTypes');
    return data;
  },
  getHospitals: async (id: string): Promise<IHospitals[]> => {
    const { data } = await axiosInstance.get(`hospitals?hospitalType=${id}`);
    return data.hospitals;
  },
};

export default HospitalAPI;
