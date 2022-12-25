import create from "zustand";

interface ColorState {
  color: string;
  setColor: (color: string) => void;
}

export const useColor = create<ColorState>((set) => ({
  color: "#BF4040",
  setColor: (color: string) => set({ color }),
}));
