import GradientBgWrapper from "../components/GradientBgWrapper";
import {Link, useParams} from "react-router-dom";
import {Box, CircularProgress, Stack, Typography, useMediaQuery} from "@mui/material";
import {useCallback, useEffect, useRef, useState} from "react";
import usePlanetImages from "../hooks/usePlanetImages";
import {Planet, PlanetImageType} from "../types";
import PlanetDetail from "../components/Planets/PlanetDetail";
import icon_diameter from '../assets/icons/icon_diameter.svg';
import icon_surfaceWater from '../assets/icons/icon_waterSurface.svg';
import icon_rock from '../assets/icons/icon_rock.svg';
import icon_cloud from '../assets/icons/icon_cloudClimate.svg';
import icon_planet from '../assets/icons/icon_planetRoundedByRing.svg';
import icon_planetWithHoles from '../assets/icons/icon_planetWithHoles.svg';
import icon_appleFalling from '../assets/icons/icon_appleFalling.svg';
import icon_people from '../assets/icons/icon_people.svg';
import COLORS from "../contants/Colors";

const PlanetDetails = ()=>{

    const urlParams = useParams();
    const planetImages = usePlanetImages();
    const [currentPlanet, setCurrentPlanet] = useState<Planet>();
    const [isLoading, setIsLoading] = useState(false);


    const isDesktop = useMediaQuery('(min-width:1020px)');
    const blockSearch = useRef(false);

    useEffect(()=>{

        if(!currentPlanet && !isLoading && !blockSearch.current){
            blockSearch.current = true;
            setIsLoading(true);
            fetch(`https://swapi.dev/api/planets/${urlParams.id}`).then((response) => response.json()).then((data)=>{
                setCurrentPlanet(data);
                setIsLoading(false);
            });
        }
    },[urlParams.id, currentPlanet, isLoading]);

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
                              mt:'44px',
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
                          flex : '40% 1 1',
                          justifyContent:'center',
                          mt : isDesktop ? '0' : '25px'
                      }}
                      >
                          <Stack spacing='63px'>
                              <PlanetDetail title='Diameter' description={currentPlanet.diameter} iconPath={icon_diameter} cardColor='red'/>
                              <PlanetDetail title='Surface water' description={currentPlanet.surface_water} iconPath={icon_surfaceWater} cardColor='blue'/>
                              <PlanetDetail title='Terrain' description={currentPlanet.terrain} iconPath={icon_rock} cardColor='purple'/>
                              <PlanetDetail title='Climate' description={currentPlanet.climate} iconPath={icon_cloud} cardColor='green'/>
                          </Stack>

                          <Stack spacing='63px'>
                              <PlanetDetail title='Rotation period' description={currentPlanet.rotation_period} iconPath={icon_planet} cardColor='green'/>
                              <PlanetDetail title='Population' description={currentPlanet.population} iconPath={icon_people} cardColor='purple'/>
                              <PlanetDetail title='Orbital period' description={currentPlanet.orbital_period} iconPath={icon_planetWithHoles} cardColor='blue'/>
                              <PlanetDetail title='Gravity' description={currentPlanet.gravity} iconPath={icon_appleFalling} cardColor='red'/>
                          </Stack>
                      </Stack>

                  </Stack>

                  <Box sx={{
                      width:'100%',
                      margin: '25px auto',
                      height: '1px',
                      backgroundColor: 'white',
                  }}/>
                  <Link to='/planets' style={{
                      textDecoration:'none',
                      backgroundColor :COLORS.BLUE_MEDIUM_1,
                      color:'white',
                      padding:'20px 20px',
                      width: '180px',
                      textAlign:'center',
                      borderRadius:'10px',
                      margin: '0 auto',
                      fontSize : '18px',
                      fontFamily:'jost-medium'
                  }}>See all planets</Link>
              </Stack>
          )}

      </GradientBgWrapper>
    );

}

export default PlanetDetails;