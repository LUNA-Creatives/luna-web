import create from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

export const useStore = create((set: any) => ({
  isLoading: true,
  showPopup: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading: isLoading }),
  setShowPopup: (showPopup: boolean) => set({ showPopup: showPopup }),
}));

mountStoreDevtool('Store', useStore);
