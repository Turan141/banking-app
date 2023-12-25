import { Box, useTheme } from "@mui/material"
import { CSSProperties, ReactNode } from "preact/compat";
import BottomMenu from "../../components/BottomMenu";

interface IScreenParams{
    children?:any
    bottom?:ReactNode
    head?:ReactNode
    sx?:CSSProperties
}
export const BaseScreen=({children,bottom,head, sx}:IScreenParams)=>{
    const theme = useTheme(); // Fetching the current theme
console.log(theme)
    if(!bottom)
        bottom=<BottomMenu/>
    const rows=[];
    if(head)
        rows.push("max-content")
    rows.push("1fr")
    if(bottom)
        rows.push("max-content")

    return <Box sx={{
        position:"relative",
        display:"grid",
        gridTemplateRows:rows.join(" "),
        width:"100vw",
        minHeight:"100vh",
        backgroundColor: theme.palette.background.default,
    }}>

        {head}
        
        <Box sx={{
            position: "relative",
            // overflow:"auto",
            ...sx
        }}>
            <Box sx={{
                position:"absolute",
                width:"100%",
                height:"100%",
            }}>
                {children}
            </Box>
        </Box>

        <Box sx={{
            position:"fixed",
            bottom:0,
            width:"100%",
            display:"flex",
            flexDirection:"column",
            paddingBottom:"env(safe-area-inset-bottom)",
        }}>{bottom}</Box>
       
        
    </Box>
}