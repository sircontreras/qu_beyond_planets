import React, {PropsWithChildren} from "react";
import {Box} from "@mui/material";
import bgStars from "../assets/images/bgStars.png";

const StarsBgWrapper: React.FC<PropsWithChildren> = ({children})=>{

    return (
        <Box sx={{
            width:'100vw',
            height: '100vh',
            background: `linear-gradient(175deg, rgba(0,0,0,1) 0%, rgba(2,2,44,1) 100%)`,
            padding: '25px',
            '&:before' : {
                content: '""',
                background: `url(${bgStars})`,
                backgroundSize: '1584px 755px',
                backgroundRepeat : 'repeat',
                width: '100vw',
                height: '100vh',
                display: 'block',
                opacity: 0.3,
                position : 'absolute',
                top: 0,
                left: 0,

            }
        }}>
            {children}
        </Box>
    )

}

export default StarsBgWrapper;