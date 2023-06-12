import React, {PropsWithChildren} from "react";
import {Box} from "@mui/material";

interface Props {
    verticallyCenter? :boolean
}

const GradientBgWrapper: React.FC<PropsWithChildren<Props>> = ({children, verticallyCenter= false})=>{


    return (
        <Box sx={{
            width:'100%',
            height: '100%',
            minHeight : '100vh',
            background: `linear-gradient(175deg, rgba(0,0,0,1) 0%, rgba(2,2,44,1) 100%)`,
            padding: '25px',
            display: verticallyCenter ? 'flex' : '',
            alignItems: verticallyCenter ? 'center' : '',
        }}>
            {children}
        </Box>
    )

}

export default GradientBgWrapper;