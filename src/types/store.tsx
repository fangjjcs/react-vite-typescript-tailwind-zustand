export interface CountState {
    count: number;
    increase: (by: number) => void;
    resetCount: () => void;
}

export interface NumberState {
    number: number;
    increase: (by: number) => void;
    resetNumber: () => void;
}

type Data = {
    id: string;
    full_name: string;
    html_url: string;
};
  
export interface DataState {
    data: Data[];
    isLoading: boolean;
    getData: (query: string) => void;
}