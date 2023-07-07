import { create } from "zustand";

const store = (set) => ({
  darkMode: true,
  setDarkMode: (darkMode) => set(() => ({ darkMode: darkMode })),

  isLoaded: false,
  setIsLoaded: (isLoaded) => set(() => ({ isLoaded: isLoaded })),

  data: { welcome: "welcome" },
  setData: (data) => set(() => ({ data: data })),
});

export const useStore = create(store);
