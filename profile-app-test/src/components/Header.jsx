//ヘッダー部分

import React, { useState } from "react";
import { Link } from "react-router-dom";


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';




export const Header = () => {
    //ツールバー左のアイコンクリック
    const [leftlistopen, leftsetlistopen] = useState(false);
    const leftlistOpen=() => {
        leftsetlistopen(true);
    }
    const leftlistClose=() => {
        leftsetlistopen(false);
    }

    //ツールバー右のアイコンクリック
    const [rightlistopen, rightsetlistopen] = useState(false);
    const rightlistOpen=() => {
        rightsetlistopen(true);
    }
    const rightlistClose=() => {
        rightsetlistopen(false);
    }

    return(
        <>
        {/* ツールバーのUI */}
        <Box sx={{ flexGrow: 1 , 
            "@media screen and (min-width:600px)": {
            width: ".8rem",
            },}} style={{height: '56px'} }>
            <AppBar>
                <Toolbar>
                    <IconButton color="inherit" onClick={leftlistOpen}>
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
                        onClick={rightlistOpen}
            
                    >
                    <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>


            {/* 左のツールバーをクリックした時に出てくるもの */}
            <Drawer anchor='left' open={leftlistopen} onClose={leftlistClose}>
                <List sx={{ width: 250 }}>
                    <Typography variant="h1" align="center" sx={{ flexGrow: 1, fontSize: 18 }}>
                    Communities
                    </Typography>
                    <ListItem button onClick={leftlistClose} component={Link} to={"/"} >
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary="Community 1" />
                    </ListItem>
                    <ListItem button onClick={leftlistClose} component={Link} to={"/info"} >
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary="Community 2" />
                    </ListItem>
                    <ListItem button onClick={leftlistClose} component={Link} to={"/info"} >
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary="Community 3" />
                    </ListItem>
                    <ListItem button onClick={leftlistClose} component={Link} to={"/info"} >
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary="Community 4" />
                    </ListItem>
                    <ListItem button onClick={leftlistClose} component={Link} to={"/info"} >
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary="Community 5" />
                    </ListItem>
                </List>
            </Drawer>

            {/* 右のツールバーをクリックした時に出てくるもの */}
            <Drawer anchor='right' open={rightlistopen} onClose={rightlistClose}>
                <List sx={{ width: 300 }}>
                    <ListItem button onClick={rightlistClose} component={Link} to={"/"} >
                    <ListItemIcon>
                        <AssignmentIndIcon />
                    </ListItemIcon>
                    <ListItemText primary="プロフ帳を見る" />
                    </ListItem>
                    <ListItem button onClick={rightlistClose} component={Link} to={"/info"} >
                    <ListItemIcon>
                        <CompareArrowsIcon />
                    </ListItemIcon>
                    <ListItemText primary="プロフを交換する" />
                    </ListItem>
                </List>
            </Drawer>


        </Box>
        </>
    )
}