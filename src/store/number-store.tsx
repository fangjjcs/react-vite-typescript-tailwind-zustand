import { create } from "zustand";
import { NumberState } from "../types/store";

export const useNumberStore = create<NumberState>()((set) => ({
  number: 0,
  increase: (by) => set((state) => ({ number: state.number + by })),
  resetNumber: () => set({ number: 0 }),
}));