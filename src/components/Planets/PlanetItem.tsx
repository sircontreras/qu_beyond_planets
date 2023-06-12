import {Grid, Stack, Typography} from "@mui/material";
import React, {useMemo} from "react";
import {Planet, PlanetImageType} from "../../types";
import COLORS from "../../contants/Colors";
import {useNavigate} from "react-router-dom";
import usePlanetImages from "../../hooks/usePlanetImages";

interface Props {
    planetData : Planet
}

const PlanetItem: React.FC<Props> = ({planetData})=>{

    const planetImages = usePlanetImages();

    const navigator = useNavigate();

    const planetImg = useMemo(()=>{

        const fromListPlanet = planetImages[planetData.name as keyof PlanetImageType];

        return fromListPlanet?.length ? fromListPlanet : planetImages['Tatooine'];

    },[planetData.name, planetImages] );

    const getPlanetId = (planetUrl : string)=>{
       return planetUrl[planetUrl.length -2];
    }

    return (
        <Grid item xs={12} md={2}>
            <Stack sx={{
                backgroundColor : COLORS.PURPLE_DARK_2,
                justifyContent:'center',
                alignItems:'center',
                width:'100%',
                height: '200px',
                borderRadius : '10px',
                padding:'10px',
                boxSizing: 'border-box',
                display:'flex',
                transition: 'background-color 0.2s',
                '&:hover' : {
                    backgroundColor :  'rgb(62,62,124)',
                },
                cursor: 'pointer',
            }} onClick={()=>{
                navigator(`/planets/${getPlanetId(planetData.url)}`)
            }}>
                <img alt='planet' src={planetImg} style={{
                    width:'89px',
                    objectFit: 'contain'
                }}/>
                <Typography sx={{
                    fontFamily : 'jost-medium',
                    color:'white',
                    fontSize: '20px',
                    textAlign: 'center'
                }}>

                    {planetData.name}
                </Typography>
            </Stack>
        </Grid>
    )

}

export default PlanetItem;