// components
import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import { Button, Link, Typography } from '@mui/material';

// images
import logo from '../assets/logo/logo.png';
import profile from '../assets/images/avatar.png';

// icons
import homeicon from '../assets/icons/homeicon.png';
import granticon from '../assets/icons/grandicon.png';
import giveicon from '../assets/icons/giveicon.png';
import favoritesicon from '../assets/icons/favoriteicon.png';
import activityicon from '../assets/icons/activityicon.png';
import logout from '../assets/icons/logouticon.png';

// Define the width of the drawer
const drawerWidth = 240;

// Navbar component
export default function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    // Toggle mobile drawer
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Content for the drawer
    const drawerContent = (
        <div>
            {/* Logo and user profile */}
            <List sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: "20px",gap:"20px" }}>
                <img src={logo} alt="logo" height="30px" width="110px" />
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap:"20px" }}>
                    <img src={profile} alt="profile" height="80" width="80" />
                    <Typography caption>Louis Carter</Typography>
                    <Button variant='contained'>Edit</Button>
                </Box>
            </List>

            {/* Navigation links */}
            <List sx={{ display: "flex", flexDirection: "column", mt: "40px", alignItems: "center",gap:"30px" }}>
                {/* Define a reusable link component */}
                {[
                    { icon: homeicon, label: 'Home',link:"/" },
                    { icon: granticon, label: 'Grant',link:"/grant" },
                    { icon: giveicon, label: 'Give',link:"/give" },
                    { icon: favoritesicon, label: 'Favorites',link:"/favourite" },
                    { icon: activityicon, label: 'Activity',link:"/activity" },
                    { icon: homeicon, label: 'Legacy',link:"/legacy" },
                ].map((item, index) => (
                    <Link href={item.link} key={index} sx={{ display: "flex", alignItems: "center", gap: "20px", textAlign: "start"}}>
                        <img src={item.icon} alt={item.label} />
                        <Typography variant='light' sx={{transition: "background-color 0.3s ease",'&:hover':{ color:"black",width:"50px"}}} width="67px" height="22px">{item.label}</Typography>
                    </Link>
                ))}
            </List>

            {/* Logout */}
            <List sx={{ display: "flex", gap: "20px", justifyContent: "center", mt: "120px" }}>
                <img src={logout} alt="logout" />
                <Typography variant='light' sx={{transition: "background-color 0.3s ease",'&:hover':{ color:"black",width:"50px",cursor:"pointer"}}} width="67px" height="22px">Logout</Typography>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <MenuIcon onClick={handleDrawerToggle} />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* Mobile Drawer */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawerContent}
                </Drawer>
                {/* Permanent Drawer */}
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawerContent}
                </Drawer>
            </Box>
        </Box>
    );
}
