import type { Treatment } from "@/types/treatment";

import { axiosInstance } from "@/axiosInstance";
import { queryKeys } from "@/react-query/constants";
import { useQuery, useQueryClient } from "@tanstack/react-query";

// for when we need a query function for useQuery
async function getTreatments(): Promise<Treatment[]> {
  const { data } = await axiosInstance.get('/treatments');
  return data;
  // const response = await fetch('http://localhost:3030/treatments',{
  //   method: "GET",
  //   headers: new Headers()
  // });
  // const data = await response.json();
  // return data;
}

export function useTreatments(): Treatment[] {
  
  const fallbackState: Treatment[] = [];
  // initialData: [] can define initial state, but it'll disable query if setting staleTime: Infinity at the same time
  const { data=fallbackState } = useQuery({
    queryKey: [queryKeys.treatments],
    queryFn: getTreatments,
    staleTime: Infinity // disable auto refetch
  });

  return data;
}

// prefetch function
export function usePrefetchTreatments(): void {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery({
    queryKey: [queryKeys.treatments],
    queryFn: getTreatments,
    staleTime: Infinity // disable auto refetch
  });
}