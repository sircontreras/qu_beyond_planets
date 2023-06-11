import React, {PropsWithChildren, useState} from "react";
import StarsBgWrapper from "../components/StarsBgWrapper";
import {Box, Grid, InputAdornment, MenuItem, TextField, Typography} from "@mui/material";
import COLORS from "../contants/Colors";
import icon_climate from '../assets/icons/icon_cloudClimate.svg';
import icon_arrowDown from '../assets/icons/icon_whiteArrowDown.svg';
import SelectField from "../components/SelectField";



const PlanetListPage: React.FC<PropsWithChildren> = ({children}) => {

    const [climateCriteria, setClimateCriteria] = useState('');

    const climateHandler = (newValue :string)=>{
        setClimateCriteria(newValue);
    }


    return (
        <StarsBgWrapper>

            <Box sx={{
                textAlign: 'center'
            }}>
                <Typography sx={{
                    fontFamily: 'jost-regular',
                    color: 'white',
                    fontSize: '62px',
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
            <Grid container spacing={3} sx={{
                justifyContent: 'center',
                marginTop:'48px'
            }}>
                <Grid item xs={2}>
                   <Box>
                       <SelectField
                           defaultText='Sort by climate'
                           value={climateCriteria}
                           options={[{
                           label : 'Templado',
                           value: 'templado'
                       }, {
                           label: 'Lluvioso',
                           value : 'lluvioso'
                       }]}
                       onChange={climateHandler}
                        iconName='cloud'
                       />
                   </Box>
                </Grid>
                {/*<Grid item xs={2}>*/}
                {/*    <Box>*/}
                {/*        <SelectField/>*/}
                {/*    </Box>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={2}>*/}
                {/*    <Box>*/}
                {/*        <SelectField/>*/}
                {/*    </Box>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={2}>*/}
                {/*    <Box>*/}
                {/*        <SelectField/>*/}
                {/*    </Box>*/}
                {/*</Grid>*/}

            </Grid>
        </StarsBgWrapper>
    )

}

export default PlanetListPage;