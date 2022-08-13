// 画面下のナビゲーションバーを作る

import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import CreateIcon from '@mui/icons-material/Create';




export const Nav = () => {
    const [value, setValue] = React.useState(0);
    return(
        <>
        <Box>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}>


                <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/"/>
                <BottomNavigationAction label="Timeline" icon={<FeedIcon />} component={Link} to="/ranking"/>
                <BottomNavigationAction label="Create" icon={<CreateIcon />} component={Link} to="/create"/>
            </BottomNavigation>
        </Box>
        </>
    )
}
