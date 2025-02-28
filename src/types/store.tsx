import { Treatment } from "./treatment";

export interface CountState {
    count: number;
    treatmentNum: Number;
    increase: (by: number) => void;
    resetCount: () => void;
    setTreatment: (data: Treatment[]) => void;
}

export interface NumberState {
    number: number;
    increase: (by: number) => void;
    resetNumber: () => void;
}

type Data = {
    id: string;
    name: string;
    description: string;
};
  
export interface DataState {
    data: Data[];
    isLoading: boolean;
    getData: () => void;
}