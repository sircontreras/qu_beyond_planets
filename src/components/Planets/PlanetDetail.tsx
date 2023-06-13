import {Box, Stack, Typography} from "@mui/material";
import React, {useMemo} from "react";
import COLORS from "../../contants/Colors";

interface Props {
    title : string,
    description :string,
    iconPath : string,
    cardColor? : 'red' | 'blue' | 'purple' | 'green'
}
const PlanetDetail: React.FC<Props> = ({title, description, iconPath, cardColor = 'red'})=>{

    const iconCardColor = useMemo(()=>{
        switch (cardColor){

            case 'red':
                return COLORS.RED_MEDIUM_1;
                break;

            case 'blue':
                return COLORS.BLUE_MEDIUM_1;
                break;

            case 'purple':
                return  COLORS.PURPLE_MEDIUM_1;
                break;

            case 'green':
                return  COLORS.GREEN_MEDIUM_1;
                break;

            default:
                return COLORS.RED_MEDIUM_1;
                break;

        }
    },[cardColor]);

    return (
        <Stack direction='row'>
            <Box sx={{
                flexShrink : 0,
                backgroundColor : iconCardColor,
                width: '63px',
                height:  '81px',
                borderRadius: '10px',
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box sx={{
                    width:'47px',
                    height:'47px',
                    backgroundColor: 'white',
                    borderRadius: '100px',
                    display:'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img alt='planetDetail' src={iconPath}/>
                </Box>
            </Box>
            <Box sx={{
                marginLeft:'15px'
            }}>
                <Typography sx={{
                    fontFamily : 'jost-regular',
                    fontSize:'20px',
                    color:'white',

                }}>{title}</Typography>
                <Typography sx={{
                    fontFamily : 'jost-regular',
                    fontSize:'41px',
                    color:'white',
                    lineHeight: '40px',
                    wordBreak: 'break-word'
                }}>{description}</Typography>
            </Box>
        </Stack>
    );

}

export default PlanetDetail;