import React, {PropsWithChildren, useEffect, useState} from "react";
import StarsBgWrapper from "../components/StarsBgWrapper";
import {Box, CircularProgress, Grid, Typography} from "@mui/material";
import SelectField from "../components/SelectField";
import {Planet, ResponseType} from "../types";
import PlanetsList from "../components/Planets/PlanetsList";
import planetsList from "../components/Planets/PlanetsList";
import icon_sort from "../assets/icons/icon_sort.svg";


const PlanetListPage: React.FC<PropsWithChildren> = ({children}) => {

    const [climateCriteria, setClimateCriteria] = useState('');

    const [fetchedPlanets, setFetchedPlanets] = useState<Planet[]>([]);
    const [isLoading, setIsloading] = useState(false);

    const climateHandler = (newValue: string) => {
        setClimateCriteria(newValue);
    }

    useEffect(() => {


            const loadPlanets = async (): Promise<void> =>{
                let planetsFound: Planet[] = [];

               await
                    fetch('https://swapi.dev/api/planets/?page=1').then((response) => response.json().then((data: ResponseType) => {
                    planetsFound.push(...data.results);
                }));

               await
                    fetch('https://swapi.dev/api/planets/?page=2').then((response) => response.json().then((data: ResponseType) => {
                        planetsFound.push(...data.results);
                    }));

                setFetchedPlanets(planetsFound);
                setIsloading(false);

            }

            if(!isLoading && fetchedPlanets.length === 0) {
                loadPlanets();
                setIsloading(true);
            }


    }, [isLoading, fetchedPlanets.length]);


    return (
        <StarsBgWrapper>

            <Box sx={{
                textAlign: 'center'
            }}>
                <Typography sx={{
                    fontFamily: 'jost-regular',
                    color: 'white',
                    fontSize: {
                        xs: '50px',
                        md:  '62px'
                    },
                    textTransform: 'uppercase',
                    letterSpacing: 9
                }}>
                    Planet searcher
                </Typography>
                <Typography sx={{
                    fontFamily: 'jost-regular',
                    color: 'white',
                    fontSize: '26px',
                    letterSpacing: 5

                }}>
                    You will find the planets controlled by the Empire.
                </Typography>
            </Box>

            {isLoading && <Box><CircularProgress sx={{
                margin: '80px auto 15px',
                display: 'block'
            }}/>
                <Typography sx={{
                    color: 'white',
                    textAlign: 'center',
                    fontFamily: 'jost-regular',
                    fontSize: '18px'
                }}>Loading the planets...
                </Typography>
            </Box>}
            {(!isLoading && planetsList.length) && <>
                <Box sx={{
                    maxWidth: '992px',
                    width: '100%',
                    margin: '48px auto 0'
                }}>
                    <Grid container spacing='16px' sx={{
                        justifyContent: 'center',
                    }}>
                        <Grid item xs={12} md={12} minWidth='236px'>
                            <Box>
                                <SelectField
                                    defaultText='Sort the planets alphabetically'
                                    value={climateCriteria}
                                    options={[{
                                        label: 'Acs',
                                        value: 'Ascending'
                                    }, {
                                        label: 'Desc',
                                        value: 'Descending'
                                    }]}
                                    onChange={climateHandler}
                                    iconPath={icon_sort}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <PlanetsList planetItems={fetchedPlanets}/>
            </>}


        </StarsBgWrapper>
    )

}

export default PlanetListPage;