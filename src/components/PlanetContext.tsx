import React, {PropsWithChildren, useContext, useState} from "react";
import {Planet} from "../types";

interface PlanetCxtType {
    fetchedPlanets : Planet[],
    setFetchedPlanets :  React.Dispatch<React.SetStateAction<Planet[]>>
}

const PlanetCxt = React.createContext<PlanetCxtType>({
    fetchedPlanets: [],
    setFetchedPlanets : ()=>{}
});

export const usePlanetContext = ()=>{
    return useContext(PlanetCxt);
}

 const PlanetContext:React.FC<PropsWithChildren> = ({children})=>{

    const [fetchedPlanets, setFetchedPlanets] = useState<Planet[]>([]);



    return (
        <PlanetCxt.Provider value={{
            fetchedPlanets,
            setFetchedPlanets
        }}>
            {children}
        </PlanetCxt.Provider>
    )

}

export default PlanetContext;

