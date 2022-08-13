// import React, { useState } from "react";
// import { Link } from "react-router-dom";


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import WorkspacesIcon from '@mui/icons-material/Workspaces';


export const Header = () => {
    // const [listopen, setlistopen] = useState(false);
    // const listOpen=() => {
    //     setlistopen(true);
    // }
    // const listClose=() => {
    //     setlistopen(false);
    // }

    return(
        <>
        <Box sx={{ flexGrow: 1 }} style={{height: '56px'}}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton color="inherit">
                        <WorkspacesIcon />
                    </IconButton>
                    
                    <Typography variant="h1" align="center" sx={{ flexGrow: 1, fontSize: 26 }}>
                        コミュニティ名
                    </Typography>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        // onClick={}
                    >
                    <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            
        </Box>

        </>
    )
}