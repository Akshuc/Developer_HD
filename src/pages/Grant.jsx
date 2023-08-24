import { Box, CardContent, Container, Grid, Typography } from '@mui/material';
import { Link } from '@mui/material';

import poster from '../assets/images/poster.png';
import location from '../assets/icons/location.png';
import grant from '../assets/icons/grandicon.png';
import btn from '../assets/images/BTN.png';
import video from '../assets/images/video.png';
import phone from "../assets/icons/phone.png";
import web from '../assets/icons/web.png'
import twitter from '../assets/icons/twitter.png';
import facebook from '../assets/icons/facebook.png';
import insta from "../assets/icons/instagram.png"
import disaster from "../assets/images/Disaster.png"
import aid from "../assets/images/aid.png"
import env from "../assets/images/env.png"
import mission from '../assets/images/mission.png'

const Grant = () => {
    return (
        <Container maxWidth="lg" sx={{ mr: "55px", background: "rgba(244, 246, 250, 1)" }}>
            {/* Banner and Card Container */}
            <Box sx={{ background: "#FFFFFFFF", width: "753px", height: "325px", borderRadius: "16px" }}>
                <Grid container spacing={2}>
                    {/* Banner Section */}
                    <Grid item xs={6} display="flex" gap={4}>
                        <img src={poster} alt="img" height="96px" width="96px" />
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <Typography caption>Boys & Girls Clubs of Southern Maine</Typography>
                            <Box sx={{ display: "flex" }}>
                                <img src={location} alt="logo" />
                                <Typography fontSize="10px">Portland, N/A</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} display="flex" gap={5}>
                        <Link href="/sendGrant" sx={{ display: "flex", justifyContent: "center", gap: "10px", alignItems: "center", background: "rgba(21, 153, 218, 1)", textDecoration: "none", width: "188px", height: "48px", borderRadius: "48px" }}>
                            <img src={grant} alt="grant" height="20px" width="20px" />
                            <Typography>Send a grant</Typography>
                        </Link>
                        <img src={btn} alt="btn" height="48px" width="48px" />
                    </Grid>
                </Grid>

                {/* Card Section */}
                <Grid ml={5} item xs={12} display="flex" mr={10} mt={5} gap={2}>
                    {[1, 2, 3].map((index) => (
                        <CardContent key={index} sx={{ border: "1px solid rgba(222, 223, 231, 1)", borderRadius: "16px", background: "#FFFFF" }}>
                            <Typography variant="h5" component="div">
                                5 NCF givers
                            </Typography>
                            <Typography variant="body2">
                                have charity in their favorite charities list
                            </Typography>
                        </CardContent>
                    ))}
                </Grid>
            </Box>

            {/* Videos and About Us Section */}
            <Box mt={5} sx={{ background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "30px", width: "752px", justifyContent: "center", borderRadius: "16px" }}>
                <Typography mt={2} ml={5}>Videos Block</Typography>
                <img src={video} alt="video" width="688px" height="310px" style={{marginLeft:"20px"}} />
                <Box>
                    <Typography ml={2} variant="h4">About us:</Typography>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, unde.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, numquam?</li>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, saepe.</li>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, ad!</li>
                    </ul>
                </Box>
            </Box>

            {/* Contact Information Section */}
            <Box gap={2} sx={{ width: "360px", height: "324px", position: "relative", left: "800px", bottom: "945px", background: "#FFFFFF", display: "flex", borderRadius: "16px", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
                <Typography variant='h5'>Contact Information</Typography>
                <Box gap={5} sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                    <Box sx={{ display: "flex", width: "289px", gap: "10px" }}>
                        <img src={location} alt="location" height="20px" width="20px" />
                        <Typography>Chino Valley Community Church 14601 Peyton DrChino Hills, CA 91709</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "10px" }}>
                        <img src={phone} alt="phone" height="20px" width="20px" />
                        <Typography>909-606-4848</Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "10px" }}>
                        <img src={web} alt="web" height="20px" width="20px" />
                        <Typography>cvcchurch.org</Typography>
                    </Box>
                </Box>
                <Box gap={4} mr={8} mb={5} sx={{ display: "flex", justifyContent: "flex-start" }}>
                    <img src={twitter} alt="twitter" />
                    <img src={facebook} alt="facebook" />
                    <img src={insta} alt="instagram" />
                </Box>
            </Box>

            {/* Cause Sections */}
            <Box sx={{ height: "340px", width: "360px", borderRadius: "16px", background: "#FFFFFF", position: "relative", left: "800px", bottom: "900px" }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                    <Box mt={3} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: "20px" }}>
                        <Typography>Primary Cause:</Typography>
                        <Typography color="blue" borderBottom="1px solid blue">Learn More</Typography>
                    </Box>
                    <Box ml={5} sx={{ display: "flex", gap: "10px" }}>
                        <img src={disaster} alt="disaster" />
                        <Typography>Disaster relief</Typography>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                    <Box mt={3} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: "20px" }}>
                        <Typography>Secondary Cause:</Typography>
                        <Typography color="blue" borderBottom="1px solid blue">Learn More</Typography>
                    </Box>
                    <Box ml={5} sx={{ display: "flex", gap: "10px" }}>
                        <img src={aid} alt="aid" />
                        <Typography>Aid</Typography>
                    </Box>
                    <Box ml={5} sx={{ display: "flex", gap: "10px" }}>
                        <img src={env} alt="environment" />
                        <Typography>Environment</Typography>
                    </Box>
                    <Box ml={5} sx={{ display: "flex", gap: "10px" }}>
                        <img src={mission} alt="mission" />
                        <Typography>Mission</Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Grant;
