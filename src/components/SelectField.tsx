import COLORS from "../contants/Colors";
import {InputAdornment, MenuItem, TextField} from "@mui/material";
import icon_climate from "../assets/icons/icon_cloudClimate.svg";
import icon_rock from "../assets/icons/icon_rock.svg";
import icon_planet from "../assets/icons/icon_planetRoundedByRing.svg";
import icon_planetWithHoles from "../assets/icons/icon_planetWithHoles.svg";


import icon_arrowDown from "../assets/icons/icon_whiteArrowDown.svg";
import React, {useMemo} from "react";

interface Props{
    defaultText : string,
    iconName : 'cloud' | 'rock' | 'planet' | 'planetWithHoles',
    value : string,
    options : {label : string, value : string}[],
    onChange : (newValue : string)=>void
}

const SelectField: React.FC<Props> = ({defaultText, iconName, value, options, onChange})=>{

    const leadingIconName = useMemo(()=>{

        switch (iconName){

            case 'cloud':
                return icon_climate;
                break;

            case 'rock':
                return icon_rock;
                break;

            case 'planet':
                return icon_planet;
                break;

            case 'planetWithHoles':
                return icon_planetWithHoles;
                break;

            default:
                return icon_climate;
                break;

        }
    },[iconName]);

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

    },[options]);

    return (
        <TextField
            value={value.length ? value : defaultText}
            select
            sx={{
                width:'100%',
                backgroundColor: COLORS.BLACK_PURPLE_1,
                backgroundImage : `url(${leadingIconName}), url(${icon_arrowDown})`,
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
        >
            {processedOptions}

        </TextField>
    );

}

export default SelectField;