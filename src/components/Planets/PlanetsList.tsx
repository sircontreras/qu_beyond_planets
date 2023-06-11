import React from "react";
import {Grid} from "@mui/material";
import {Planet} from "../../types";
import PlanetItem from "./PlanetItem";



interface Props {
    planetItems : Planet[]
}

const PlanetsList:React.FC<Props> = ({planetItems})=>{

    return (
        <Grid container  sx={{
            marginTop:'0px',
        }} spacing='15px'>
            {planetItems.map(((pI)=>{
                return <PlanetItem key={pI.name} planetData={pI} />
            }))}
        </Grid>
    )

}

export default PlanetsList;