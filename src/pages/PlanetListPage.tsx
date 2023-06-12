import React, {PropsWithChildren, useEffect, useMemo, useState} from "react";
import StarsBgWrapper from "../components/StarsBgWrapper";
import {Box, CircularProgress, Grid, Typography} from "@mui/material";
import SelectField from "../components/SelectField";
import {Planet, ResponseType} from "../types";
import PlanetsList from "../components/Planets/PlanetsList";
import planetsList from "../components/Planets/PlanetsList";
import icon_sort from "../assets/icons/icon_sort.svg";

type SortTypes = 'asc' | 'desc';


const PlanetListPage: React.FC<PropsWithChildren> = ({children}) => {

    const [fetchedPlanets, setFetchedPlanets] = useState<Planet[]>([]);
    const [isLoading, setIsloading] = useState(false);

    const [sortCriteria, setSortCriteria] = useState<SortTypes | null>();



    const sortingHandler = (event: React.SyntheticEvent) => {
        setSortCriteria((event.target as HTMLInputElement).value as SortTypes);
        console.log((event.target as HTMLInputElement).value);
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

    const sortedPlanets = useMemo(()=>{

        let sortedOnes= [...fetchedPlanets];
        if(sortCriteria === 'asc'){
            sortedOnes = sortedOnes.sort((a, b)=>{
                return a.name.localeCompare(b.name);
            });
        }else if(sortCriteria === 'desc'){
            sortedOnes = sortedOnes.sort((a, b)=>{
                return b.name.localeCompare(a.name);
            });
        }

        return sortedOnes;

    },[fetchedPlanets, sortCriteria] );


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
            {(!isLoading && fetchedPlanets.length) && <>
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
                                    value={sortCriteria ?? ''}
                                    options={[{
                                        label: 'In ascending order',
                                        value: 'asc'
                                    }, {
                                        label: 'In descending order',
                                        value: 'desc'
                                    }]}
                                    onChange={sortingHandler}
                                    iconPath={icon_sort}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <PlanetsList planetItems={sortedPlanets}/>
            </>}


        </StarsBgWrapper>
    )

}

export default PlanetListPage;