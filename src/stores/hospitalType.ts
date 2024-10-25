import { create } from 'zustand';

interface IhospitalType {
  hospitalTypeName: string;
  setType: (hospitalType: string) => void;
}

export const useHospitalTypeStore = create<IhospitalType>((set) => ({
  hospitalTypeName: '병원타입',
  setType: (name) => {
    set(() => ({ hospitalTypeName: name }));
  },
}));
