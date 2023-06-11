import React, {PropsWithChildren, useEffect, useState} from "react";
import StarsBgWrapper from "../components/StarsBgWrapper";
import {Box, CircularProgress, Grid, Typography} from "@mui/material";
import SelectField from "../components/SelectField";
import {Planet, ResponseType} from "../types";
import PlanetsList from "../components/Planets/PlanetsList";
import planetsList from "../components/Planets/PlanetsList";

const PlanetListPage: React.FC<PropsWithChildren> = ({children}) => {

    const [climateCriteria, setClimateCriteria] = useState('');

    const [fetchedPlanets, setFetchedPlanets] = useState<Planet[]>([]);
    const [isLoading, setIsloading] = useState(false);

    const climateHandler = (newValue: string) => {
        setClimateCriteria(newValue);
    }

    useEffect(() => {

        setIsloading(true);
        fetch('https://swapi.dev/api/planets/').then((response) => response.json().then((data: ResponseType) => {
            setFetchedPlanets(data.results);
            setIsloading(false);
        }));

    }, []);


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
                    <Grid container spacing={3} sx={{
                        justifyContent: 'center',
                    }}>
                        <Grid item xs={12} md={3} minWidth='236px'>
                            <Box>
                                <SelectField
                                    defaultText='By climate'
                                    value={climateCriteria}
                                    options={[{
                                        label: 'Templado',
                                        value: 'templado'
                                    }, {
                                        label: 'Lluvioso',
                                        value: 'lluvioso'
                                    }]}
                                    onChange={climateHandler}
                                    iconName='cloud'
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3} minWidth='236px'>
                            <Box>
                                <SelectField
                                    defaultText='By terrain'
                                    value={climateCriteria}
                                    options={[{
                                        label: 'Templado',
                                        value: 'templado'
                                    }, {
                                        label: 'Lluvioso',
                                        value: 'lluvioso'
                                    }]}
                                    onChange={climateHandler}
                                    iconName='rock'
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3} minWidth='236px'>
                            <Box>
                                <SelectField
                                    defaultText='By rotation'
                                    value={climateCriteria}
                                    options={[{
                                        label: 'Templado',
                                        value: 'templado'
                                    }, {
                                        label: 'Lluvioso',
                                        value: 'lluvioso'
                                    }]}
                                    onChange={climateHandler}
                                    iconName='planet'
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3} minWidth='236px'>
                            <Box>
                                <SelectField
                                    defaultText='By orbit'
                                    value={climateCriteria}
                                    options={[{
                                        label: 'Templado',
                                        value: 'templado'
                                    }, {
                                        label: 'Lluvioso',
                                        value: 'lluvioso'
                                    }]}
                                    onChange={climateHandler}
                                    iconName='planetWithHoles'
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