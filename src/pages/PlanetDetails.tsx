import GradientBgWrapper from "../components/GradientBgWrapper";
import {Link, useParams} from "react-router-dom";
import {Box, Button, CircularProgress, Grid, Stack, Typography, useMediaQuery} from "@mui/material";
import {useCallback, useEffect, useMemo, useState} from "react";
import usePlanetImages from "../hooks/usePlanetImages";
import {Planet, PlanetImageType} from "../types";
import PlanetDetail from "../components/Planets/PlanetDetail";
import icon_diameter from '../assets/icons/icon_diameter.svg';
import icon_surfaceWater from '../assets/icons/icon_waterSurface.svg';
import icon_rock from '../assets/icons/icon_rock.svg';
import icon_cloud from '../assets/icons/icon_cloudClimate.svg';

const PlanetDetails = ()=>{

    const urlParams = useParams();
    const planetImages = usePlanetImages();
    const [currentPlanet, setCurrentPlanet] = useState<Planet>();
    const [isLoading, setIsLoading] = useState(false);


    const isDesktop = useMediaQuery('(min-width:1020px)');

    useEffect(()=>{
        if(!currentPlanet){
            setIsLoading(true);
            fetch(`http://swapi.dev/api/planets/${urlParams.id}`).then((response) => response.json()).then((data)=>{
                setCurrentPlanet(data);
                setIsLoading(false);
            });
        }


    },[urlParams.id]);

    const getPlanetImg = useCallback((planetName: string)=>{

        const fromListPlanet = planetImages[planetName as keyof PlanetImageType];

        return fromListPlanet?.length ? fromListPlanet : planetImages['Tatooine'];

    },[planetImages] );

    return (
      <GradientBgWrapper verticallyCenter>
          {isLoading && (<Stack sx={{
              margin: '0 auto',
              alignItems:'center'
          }}>
              <CircularProgress />
              <Typography sx={{
                  fontFamily : 'jost-regular',
                  color: 'white',
                  fontSize: '20px',
                  textAlign:'center',
                  marginTop:'10px'
              }}>Loading...</Typography>
          </Stack>)}
          {!isLoading && currentPlanet && (
              <Stack sx={{
                  width:'100%',
                  maxWidth: '1162px',
                  margin: '0 auto',
              }}>
                  <Stack direction={isDesktop ? 'row' : 'column'} sx={{
                      width:'100%',
                      height:'100%',
                      maxWidth: '1162px',
                      margin: '0 auto',
                  }}>

                      <Stack sx={{
                          display: 'inline-flex',
                          flex : '30% 1 1',
                          alignItems:'center',
                          justifyContent: 'center'
                      }}>
                          <Box>
                              <img alt={currentPlanet.name} src={getPlanetImg(currentPlanet.name)} style={{
                                  width:'240px',
                                  objectFit:'contain',
                              }}/>

                          </Box>
                          <Box sx={{
                              display:'inline-flex',
                              mt:'44px'
                          }}>
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
                          </Box>
                      </Stack>
                      <Stack direction={{xs: 'column', sm:'row'}} spacing='40px' sx={{
                          flex : '70% 1 1',
                          justifyContent:'center',
                          mt : isDesktop ? '0' : '25px'
                      }}
                      >
                          <Stack spacing='63px'>
                              <PlanetDetail title='Diameter' description='10,465 km' iconPath={icon_diameter} cardColor='red'/>
                              <PlanetDetail title='Surface water' description='1' iconPath={icon_surfaceWater} cardColor='blue'/>
                              <PlanetDetail title='Terrain' description='Dessert' iconPath={icon_rock} cardColor='purple'/>
                              <PlanetDetail title='Climate' description='Arid' iconPath={icon_cloud} cardColor='green'/>
                          </Stack>

                          <Stack spacing='63px'>
                              <PlanetDetail title='Rotation period' description='23' iconPath={icon_diameter} cardColor='red'/>
                              <PlanetDetail title='Population' description='20,000' iconPath={icon_surfaceWater} cardColor='blue'/>
                              <PlanetDetail title='Orbital period' description='23' iconPath={icon_rock} cardColor='purple'/>
                              <PlanetDetail title='Gravity' description='1 Standart' iconPath={icon_cloud} cardColor='green'/>
                          </Stack>
                      </Stack>

                  </Stack>

                  <Box sx={{
                      width:'100%',
                      margin: '25px auto',
                      height: '1px',
                      backgroundColor: 'white',
                  }}/>
                  <Button variant='contained' sx={{
                      margin: '0 auto',
                      fontFamily : 'jost-regular',
                      color: 'white',
                      fontSize: '20px',
                  }}>
                   <Link to='/planets' style={{
                       textDecoration:'none',
                   }}>See all planets</Link>
                  </Button>
              </Stack>
          )}

      </GradientBgWrapper>
    );

}

export default PlanetDetails;