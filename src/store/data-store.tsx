import { create } from "zustand";
import { DataState } from "@/types/store";

export const useDataStore = create<DataState>()((set, get) => ({
  data: [],
  isLoading: false,
  getData: async () => {
    
    set({ isLoading: true, data: [] });
    console.log("get", get());

    const res = await fetch(
      `http://localhost:3030/treatments`
    );
    const data = await res.json();

    set({ isLoading: false, data: data });
    console.log("get", get());
    
  },
}));