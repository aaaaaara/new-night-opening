import { IHospitals, IHospitalType } from '../types';
import { axiosInstance } from './axios';

const HospitalAPI = {
  getHospitalTypes: async (): Promise<IHospitalType[]> => {
    const { data } = await axiosInstance.get('hospitalTypes');
    return data;
  },
  getHospitals: async (id: string): Promise<IHospitals[]> => {
    const { data } = await axiosInstance.get(
      `hospitals/list?hospitalType=${id}`
    );
    return data.hospitals;
  },
  getHospitalDetail: async (id: string): Promise<IHospitals> => {
    const { data } = await axiosInstance.get(`hospitals/detail/${id}`);
    return data;
  },
};

export default HospitalAPI;
