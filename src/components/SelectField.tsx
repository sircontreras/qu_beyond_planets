import COLORS from "../contants/Colors";
import {MenuItem, TextField} from "@mui/material";



import icon_arrowDown from "../assets/icons/icon_whiteArrowDown.svg";
import React, {useMemo} from "react";

interface Props{
    defaultText : string,
    iconPath : string,
    value : string,
    options : {label : string, value : string}[],
    onChange : (event: React.SyntheticEvent)=>void
}

const SelectField: React.FC<Props> = ({defaultText, iconPath, value, options, onChange})=>{

    const processedOptions = useMemo(()=>{

        const opts =  options.map((op)=>{
            return (
                <MenuItem key={op.value} value={op.value}>
                    {op.label}
                </MenuItem>
            )
        });

        opts.unshift(<MenuItem key={defaultText} value={defaultText}>
            {defaultText}
        </MenuItem>)

        return opts;

    },[options, defaultText]);

    return (
        <TextField
            value={value.length ? value : defaultText}
            select
            sx={{
                width:'100%',
                backgroundColor: COLORS.BLACK_PURPLE_1,
                backgroundImage : `url(${iconPath}), url(${icon_arrowDown})`,
                backgroundSize : '25px 25px, 20px 25px',
                backgroundRepeat : 'no-repeat',
                backgroundPosition : 'left 16px center, right 16px center',

                borderRadius: '10px',
                '.MuiInputBase-root': {
                    fontFamily: 'jost-medium',
                    color: 'white',
                    fontSize: '18px',
                },
                '.MuiSelect-select' : {
                    paddingLeft: '50px',
                },
                svg : {
                    display:'none'
                },
                'fieldset' : {
                    border : 'none'
                }
            }}
           placeholder='Sort by climate'
            onChange={onChange}
        >
            {processedOptions}

        </TextField>
    );

}

export default SelectField;