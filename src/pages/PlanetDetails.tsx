import StarsBgWrapper from "../components/StarsBgWrapper";
import {useParams} from "react-router-dom";
import {Box, Grid, Stack, Typography} from "@mui/material";
import {usePlanetContext} from "../components/PlanetContext";
import {useMemo} from "react";
import usePlanetImages from "../hooks/usePlanetImages";
import {PlanetImageType} from "../types";
import PlanetDetail from "../components/Planets/PlanetDetail";
import icon_diameter from '../assets/icons/icon_diameter.svg';
import icon_surfaceWater from '../assets/icons/icon_waterSurface.svg';
import icon_rock from '../assets/icons/icon_rock.svg';
import icon_cloud from '../assets/icons/icon_cloudClimate.svg';




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
                  <Grid item xs={12} md={3} sx={{
                      minWidth : '314px'
                  }}>
                      <Stack sx={{
                          display: 'inline-flex',
                      }}>
                          <Box sx={{
                              position: 'relative'
                          }}>
                              <img alt={currentPlanet.name} src={planetImages[currentPlanet.name as keyof PlanetImageType]} style={{
                                  width:'275px',
                                  objectFit:'contain',
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

                <Grid container item xs={12} md={9} >
                  <Grid item xs={12} md={6} sx={{
                      justifyContent:'end'
                  }}>
                         <Stack spacing='63px'>
                             <PlanetDetail title='Diameter' description='10,465 km' iconPath={icon_diameter} cardColor='red'/>
                             <PlanetDetail title='Surface water' description='1' iconPath={icon_surfaceWater} cardColor='blue'/>
                             <PlanetDetail title='Terrain' description='Dessert' iconPath={icon_rock} cardColor='purple'/>
                             <PlanetDetail title='Climate' description='Arid' iconPath={icon_cloud} cardColor='green'/>
                         </Stack>
                  </Grid>

                    <Grid item xs={12} md={6}>
                        <Stack spacing='63px'>
                            <PlanetDetail title='Rotation period' description='23' iconPath={icon_diameter} cardColor='red'/>
                            <PlanetDetail title='Population' description='20,000' iconPath={icon_surfaceWater} cardColor='blue'/>
                            <PlanetDetail title='Orbital period' description='23' iconPath={icon_rock} cardColor='purple'/>
                            <PlanetDetail title='Gravity' description='1 Standart' iconPath={icon_cloud} cardColor='green'/>
                        </Stack>
                    </Grid>
                </Grid>
              </Grid>
          )}

      </StarsBgWrapper>
    );

}

export default PlanetDetails;