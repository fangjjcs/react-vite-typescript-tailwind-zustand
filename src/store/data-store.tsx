import { create } from "zustand";
import { DataState } from "@/types/store";

export const useDataStore = create<DataState>()((set, get) => ({
  data: [],
  isLoading: false,
  getData: async (query) => {
    
    set({ isLoading: true, data: [] });
    console.log("get", get());

    const res = await fetch(
      `https://api.github.com/search/repositories?q=${query}`
    );
    const data = await res.json();

    set({ isLoading: false, data: data.items });
    console.log("get", get());
    
  },
}));