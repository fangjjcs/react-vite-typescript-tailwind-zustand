import { useCountStore } from "@/store/count-store";
import { useDataStore } from "@/store/data-store";
import { useEffect } from "react";

export const Home = () => {
    const { count, increase, resetCount, setTreatment } = useCountStore();
    // const treatments = useTreatments();
    
    // // combine react-query and zustand ...
    // useEffect(() => {
    //     if(treatments.length > 0) {
    //         setTreatment(treatments)
    //     }
    // }, [treatments, setTreatment])

    
    const {data,  getData } = useDataStore(state=>state)

    useEffect(() => {
        console.log("here")
        if(data.length === 0) {
            getData();
        }
    }, [])

    return (
    <><h1 onClick={resetCount}>Vite + React + Zustand + React-Query</h1>
      <div className="card">
        <button onClick={() => increase(1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        {data.map(d => <div key={d.id}>{d.name}</div>)}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p></>
    )
}