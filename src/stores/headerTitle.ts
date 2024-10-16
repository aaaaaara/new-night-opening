import { create } from 'zustand';

interface IHeaderTitle {
  headerTitle: string;
  setTitle: (headerTitle: string) => void;
}

export const useHeaderTitleStore = create<IHeaderTitle>((set) => ({
  headerTitle: '병원찾기',
  setTitle: (newTitle) => {
    set(() => ({ headerTitle: newTitle }));
  },
}));
