import { create } from "zustand";
import { CountState } from "@/types/store";

export const useCountStore = create<CountState>()((set) => ({
  count: 0,
  increase: (by) => set((state) => ({ count: state.count + by })),
  resetCount: () => set({ count: 0 }),
}));
