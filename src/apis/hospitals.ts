import { IHospitals, IHospitalType } from '../types';
import { axiosInstance } from './axios';

const HospitalAPI = {
  getHospitalTypes: async (): Promise<IHospitalType[]> => {
    const { data } = await axiosInstance.get('hospitalTypes');
    return data;
  },
  getHospitals: async (
    lng: string,
    lat: string,
    id: string,
    page: number,
    pageSize: number
  ): Promise<IHospitals[]> => {
    const { data } = await axiosInstance.get(
      `hospitals?longitude=${lng}&latitude=${lat}&hospitalType=${id}&pageNo=${page}&numOfRows=${pageSize}`
    );
    return data.hospitals;
  },
  getHospitalDetail: async (id: string): Promise<IHospitals> => {
    const { data } = await axiosInstance.get(`hospitals/${id}`);
    return data;
  },
};

export default HospitalAPI;
