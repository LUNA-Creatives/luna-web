import create from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

export const useStore = create((set: any) => ({
  isLoading: true,
  setIsLoading: (isLoading: boolean) => set({ isLoading: isLoading }),
}));

mountStoreDevtool('Store', useStore);
