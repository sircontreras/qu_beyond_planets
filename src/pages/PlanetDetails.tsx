import StarsBgWrapper from "../components/StarsBgWrapper";
import {useParams} from "react-router-dom";
import {Typography} from "@mui/material";
import {usePlanetContext} from "../components/PlanetContext";
import {useMemo} from "react";

const PlanetDetails = ()=>{

    const urlParams = useParams();
    const {fetchedPlanets} = usePlanetContext();

    const currentPlanet = useMemo(()=>{

        let toReturn;
        if(urlParams.name){
            toReturn =  fetchedPlanets.find((fP)=>{
               return fP.name === decodeURIComponent(urlParams.name ?? '');
            });
        }
        return toReturn;


    },[fetchedPlanets, urlParams.name ]);

    return (
      <StarsBgWrapper>
          {currentPlanet && (
              <Typography sx={{
                  color:'white'
              }}>
                  {currentPlanet.climate}
              </Typography>
          )}

      </StarsBgWrapper>
    );

}

export default PlanetDetails;