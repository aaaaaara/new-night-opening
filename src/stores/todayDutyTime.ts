import { create } from 'zustand';

interface IdutyDate {
  todayDutyTime: string;
  setTodayDutyTime: (todayDutyTime: string) => void;
}

export const useTodayDutyTimeStore = create<IdutyDate>((set) => ({
  todayDutyTime: '',
  setTodayDutyTime: (newTodayDutyTime) => {
    set(() => ({ todayDutyTime: newTodayDutyTime }));
  },
}));
