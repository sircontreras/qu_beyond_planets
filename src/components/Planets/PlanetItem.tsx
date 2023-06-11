import {Box, Grid, Stack, Typography} from "@mui/material";
import planet1 from '../../assets/images/planets/planet1.svg';
import React from "react";
import {Planet} from "../../types";
import COLORS from "../../contants/Colors";

interface Props {
    planetData : Planet
}

const PlanetItem: React.FC<Props> = ({planetData})=>{

    return (
        <Grid item xs={12} md={2}>
            <Stack sx={{
                backgroundColor : COLORS.PURPLE_DARK_2,
                justifyContent:'center',
                alignItems:'center',
                width:'100%',
                height: '100%',
                borderRadius : '10px',
                padding:'10px',
                boxSizing: 'border-box',
                display:'flex',
                transition: 'background-color 0.2s',
                '&:hover' : {
                    backgroundColor :  'rgb(62,62,124)',
                },
                cursor: 'pointer'
            }}>
                <img alt='planet' src={planet1} style={{
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