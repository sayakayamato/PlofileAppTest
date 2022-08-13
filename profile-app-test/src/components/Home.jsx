import React from "react";
import Box from '@mui/material/Box';

export const Home = () => {
    return(
        <>
        <Box sx={{ flexGrow: 1 , 
            "@media screen and (min-width:600px)": {
            width: "100%",
            },}} 
            style={{height: '650px', backgroundColor: 'rgb(238, 208, 208)'} }>
        <p>ここにルーム機能をつけます</p>
        </Box>
        
        
        </>
    )
}