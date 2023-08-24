import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

import arrow from '../assets/icons/arrow.png';
import bell from '../assets/icons/notificationbell.png';
import search from '../assets/icons/searchicon.png';

const Header = () => {
    return (
        <Box sx={{ background: "rgba(244, 246, 250, 1)", py: "20px" }}>
            <Container>
                <Grid container spacing={2}>
                    {/* Left side content */}
                    <Grid item xs={8}>
                        {/* Add your content for the left side here */}
                    </Grid>

                    {/* Right side content */}
                    <Grid item xs={4} display="flex" justifyContent="center" alignItems="center" gap={5}>
                        {/* Dropdown with label */}
                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "329px", height: "48px", background: "#ffffff", alignItems: "center", borderRadius: "16px", px: "10px" }}>
                            <Typography sx={{ fontWeight: "400", fontSize: "16px" }}>
                                The Sample Family Fund
                            </Typography>
                            <img src={arrow} alt="arrow" style={{ height: "20px", width: "20px" }} />
                        </Box>
                        
                        {/* Notification bell */}
                        <img src={bell} alt="notification bell" style={{ height: "28px", width: "28px" }} />
                        
                        {/* Search icon */}
                        <img src={search} alt="search icon" style={{ height: "28px", width: "28px" }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Header;
