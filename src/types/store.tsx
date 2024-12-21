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