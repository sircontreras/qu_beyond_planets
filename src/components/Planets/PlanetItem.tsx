import {Box, Grid, Stack, Typography} from "@mui/material";
import planet1 from '../../assets/images/planets/planet1.svg';
import planet2 from '../../assets/images/planets/planet2.svg';
import planet3 from '../../assets/images/planets/planet3.svg';
import planet4 from '../../assets/images/planets/planet4.svg';
import planet5 from '../../assets/images/planets/planet5.svg';
import planet6 from '../../assets/images/planets/planet6.svg';
import planet7 from '../../assets/images/planets/planet7.svg';
import planet8 from '../../assets/images/planets/planet8.svg';
import planet9 from '../../assets/images/planets/planet9.svg';
import planet10 from '../../assets/images/planets/planet10.svg';
import planet11 from '../../assets/images/planets/planet11.svg';
import planet12 from '../../assets/images/planets/planet12.svg';
import planet13 from '../../assets/images/planets/planet13.svg';
import planet14 from '../../assets/images/planets/planet14.svg';
import planet15 from '../../assets/images/planets/planet15.svg';
import planet16 from '../../assets/images/planets/planet16.svg';
import planet17 from '../../assets/images/planets/planet17.svg';
import planet18 from '../../assets/images/planets/planet18.svg';
import planet19 from '../../assets/images/planets/planet19.svg';



import React, {useMemo} from "react";
import {Planet} from "../../types";
import COLORS from "../../contants/Colors";
import {useNavigate} from "react-router-dom";

const planetImages: Record<string, string> = {
    Tatooine : planet1,
    Alderaan : planet2,
    'Yavin IV' : planet3,
    Hoth : planet4,
    Dagobah : planet5,
    Bespin : planet6,
    Endor : planet7,
    Naboo : planet8,
    Coruscant : planet9,
    Kamino : planet10,
    Geonosis : planet11,
    Utapau : planet12,
    Mustafar : planet13,
    Kashyyyk : planet14,
    'Polis Massa' : planet15,
    Mygeeto : planet16,
    Felucia : planet17,
    'Cato Neimoidia' : planet18,
    Saleucami : planet19

}

interface Props {
    planetData : Planet
}

const PlanetItem: React.FC<Props> = ({planetData})=>{

    const navigator = useNavigate();

    const planetImg = useMemo(()=>{

        const fromListPlanet = planetImages[planetData.name];

        return fromListPlanet?.length ? fromListPlanet : planet1;

    },[planetData.name] );

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
                navigator(`/planets/${planetData.name}`)
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