import StarsBgWrapper from "../components/StarsBgWrapper";
import {useParams} from "react-router-dom";
import {Box, Grid, Stack, Typography} from "@mui/material";
import {usePlanetContext} from "../components/PlanetContext";
import {useMemo} from "react";
import usePlanetImages from "../hooks/usePlanetImages";
import {PlanetImageType} from "../types";


const PlanetDetails = ()=>{

    const urlParams = useParams();
    const {fetchedPlanets} = usePlanetContext();
    const planetImages = usePlanetImages();

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
              <Grid container>
                  <Grid xs={12} md={6}>
                      <Stack sx={{
                          display: 'inline-flex',

                      }}>

                          <Box>
                              <img alt={currentPlanet.name} src={planetImages[currentPlanet.name as keyof PlanetImageType]} style={{
                                  width:'275px',
                                  objectFit:'contain'
                              }}/>
                          </Box>
                          <Stack sx={{
                              alignItems:'center',
                              textAlign:'center'
                          }}>
                              <Typography sx={{
                                  fontFamily : 'jost-regular',
                                  fontSize : '62px',
                                  color:'white',
                                  textTransform: 'uppercase',
                                  display:'inline-flex',
                                  lineHeight: 1
                              }}>{currentPlanet.name}</Typography>
                              <Box sx={{
                                  height:'1px',
                                  backgroundColor:'white',
                                  width:'100%',
                                  display:'inline-flex',
                                  margin : '10px 0'
                              }}/>

                              <Typography sx={{
                                  fontFamily : 'jost-regular',
                                  fontSize : '26px',
                                  color:'white',
                                  letterSpacing : 2,
                                  display:'inline-flex',
                              }}>Capital of the Empire</Typography>
                          </Stack>
                      </Stack>
                  </Grid>
              </Grid>
          )}

      </StarsBgWrapper>
    );

}

export default PlanetDetails;