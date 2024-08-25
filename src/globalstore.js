import { create } from 'zustand';
import i18n from './i18n';

const useStore = create((set) => ({
  //i18n
  language: i18n.language, 
  setLanguage: (lang) => {
    i18n.changeLanguage(lang); 
    set({ language: lang }); 
  },
  //Burger Menu
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));

export default useStore;

