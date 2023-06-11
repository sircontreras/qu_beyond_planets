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
            <Box sx={{
                maxWidth: '992px',
                width:'100%',
                margin: '48px auto 0'
            }}>
                <Grid container spacing={3} sx={{
                    justifyContent: 'center',
                }}>
                    <Grid item xs={12} md={3}  minWidth='236px'>
                        <Box>
                            <SelectField
                                defaultText='By climate'
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
                    <Grid item xs={12} md={3}  minWidth='236px'>
                        <Box>
                            <SelectField
                                defaultText='By terrain'
                                value={climateCriteria}
                                options={[{
                                    label : 'Templado',
                                    value: 'templado'
                                }, {
                                    label: 'Lluvioso',
                                    value : 'lluvioso'
                                }]}
                                onChange={climateHandler}
                                iconName='rock'
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}   minWidth='236px'>
                        <Box>
                            <SelectField
                                defaultText='By rotation'
                                value={climateCriteria}
                                options={[{
                                    label : 'Templado',
                                    value: 'templado'
                                }, {
                                    label: 'Lluvioso',
                                    value : 'lluvioso'
                                }]}
                                onChange={climateHandler}
                                iconName='planet'
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}  minWidth='236px'>
                        <Box>
                            <SelectField
                                defaultText='By orbit'
                                value={climateCriteria}
                                options={[{
                                    label : 'Templado',
                                    value: 'templado'
                                }, {
                                    label: 'Lluvioso',
                                    value : 'lluvioso'
                                }]}
                                onChange={climateHandler}
                                iconName='planetWithHoles'
                            />
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </StarsBgWrapper>
    )

}

export default PlanetListPage;