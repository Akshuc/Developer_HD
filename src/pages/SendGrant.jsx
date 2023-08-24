import { Search } from '@mui/icons-material';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import React from 'react'
import arrow from '../assets/icons/arrow.png'
import no from '../assets/images/Number.png'
import no2 from '../assets/images/Number2.png'
import no3 from '../assets/images/Number3.png'
import icon1 from '../assets/images/oval1.png'
const SendGrant = () => {
    return (

        <Box ml={50} sx={{ background: "#F4F6FA", display: "flex", flexDirection: "column", gap: "40px" }}>

            <Box sx={{ display: "flex", gap: "15px" }}>
                <Typography sx={{ fontSize: "22px", fontWeight: "700", color: "#05192C", borderBottom: "2px solid black" }}>Send a grant</Typography>
                <Typography sx={{ fontSize: "22px", fontWeight: "500", color: "rgba(5, 25, 44, 0.6)" }}>Recurring schedules</Typography>
                <Typography sx={{ fontSize: "22px", fontWeight: "500", color: "rgba(5, 25, 44, 0.6)" }}>History</Typography>
            </Box>

            <Box sx={{ height: "338px", width: "752px", borderRadius: "16px", background: "rgba(255, 255, 255, 1)", display: "flex", flexDirection: "column", gap: "50px" }}>
                <Box sx={{ display: "flex", justifyContent: "flex-start", gap: "20px", textAlign: "center", alignItems: "center", position: "relative", left: "40px", top: "20px" }}>
                    <img src={no} alt="no" style={{ height: "40px", width: "40px" }} />
                    <Typography sx={{ color: "rgba(5, 25, 44, 1)", fontSize: "18px", fontWeight: "700" }}>Select a charity</Typography>
                </Box>

                <Box sx={{ position: "relative", left: "40px", display: 'flex', gap: "15px", flexDirection: "column" }}>
                    <Typography sx={{ color: "rgba(5, 25, 44, 1)", fontWeight: "bold", fontSize: "16px" }}>Charity</Typography>
                    <Box sx={{ display: "flex", textAlign: "center", gap: '20px' }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "308px", height: "48px", background: "#ffffff", alignItems: "center", border: "1px solid rgba(222, 223, 231, 1)", borderRadius: "16px", px: "10px" }}>
                            <Typography sx={{ fontWeight: "400", fontSize: "16px" }}>
                                My favorite charities
                            </Typography>
                            <img src={arrow} alt="arow" style={{ height: "20px", width: "20px" }} />
                        </Box>
                        <span style={{ fontSize: "16px", fontWeight: "400", marginTop: "10px" }}>or</span>
                        <Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between", width: "234px", height: "48px", background: "#ffffff", alignItems: "center", border: "1px solid rgba(222, 223, 231, 1)", borderRadius: "48px", px: "10px" }}>
                                <Typography sx={{ fontWeight: "400", fontSize: "16px" }}>
                                    Search for a charity
                                </Typography>
                                <Search />
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <Typography sx={{ color: "rgba(5, 25, 44, 1)", fontWeight: "bold", fontSize: "16px" }}>Recently Supported</Typography>
                        <Box sx={{ display: "flex" }}>

                            <Box sx={{ display: "flex", justifyContent: "center", gap: "25px", width: "286px", height: "48px", background: "#ffffff", alignItems: "center", border: "1px solid rgba(222, 223, 231, 1)", borderRadius: "48px", px: "10px" }}>
                                <img src={icon1} alt="icon" style={{ height: "40px", width: "40px" }} />
                                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <Typography variant='p' fontSize="14px" sx={{ fontWeight: "300", color: "rgba(5, 25, 44, 1" }}>Chino Valley</Typography>
                                    <Typography fontSize="14px" sx={{ fontWeight: "300", color: "rgba(5, 25, 44, 1" }}>Community Church</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>


            </Box>

            <Box sx={{ height: "491px", width: "752px", background: "rgba(255, 255, 255, 1)" }}>
                <Box sx={{ display: "flex", justifyContent: "flex-start", gap: "20px", textAlign: "center", alignItems: "center", position: "relative", left: "40px", top: "20px" }}>
                    <img src={no2} alt="no" style={{ height: "40px", width: "40px" }} />
                    <Typography sx={{ color: "rgba(5, 25, 44, 1)", fontSize: "18px", fontWeight: "700" }}>Enter Details</Typography>
                </Box>

                <Box sx={{ position: "relative", left: "40px", top: "60px", display: 'flex', gap: "15px", flexDirection: "column" }}>
                    <Typography sx={{ color: "rgba(5, 25, 44, 1)", fontSize: "14px", fontWeight: "700" }}>Enter an amount</Typography>
                    <input type="text" style={{ width: "398px", borderRadius: "16px", height: "48px", border: '1px solid rgba(222, 223, 231, 1)', textAlign: "center" }} placeholder='Available balance: $123.445.00' />
                </Box>

                <Box sx={{ position: "relative", left: "40px", top: "80px", }}>
                    <Typography sx={{ color: "rgba(5, 25, 44, 1)", fontSize: "14px", fontWeight: "700" }}>Grant Frequency</Typography>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <input type="radio" value="Grant" />Single grant
                        <input type="radio" value="ungrant" />Recuring grant
                    </div>
                </Box>

                <Box sx={{ position: "relative", left: "40px", top: "120px", }}>
                    <Typography sx={{ color: "rgba(5, 25, 44, 1)", fontSize: "14px", fontWeight: "700" }}>Timing</Typography>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <input type="radio" value="Grant" />As soon as possible
                        <input type="radio" value="ungrant" />On a specific future date
                    </div>
                </Box>

                <Box sx={{ position: "relative", left: "40px", top: "150px", }}>
                    <Typography sx={{ color: "rgba(5, 25, 44, 1)", fontSize: "14px", fontWeight: "700" }}>Timing</Typography>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <input type="checkbox" value="Grant" />Make this gran anonymus ?

                    </div>
                </Box>
            </Box>

            <Box sx={{ height: "191px", width: "752px", background: "rgba(255, 255, 255, 1)" }}>
                <Box sx={{ display: "flex", justifyContent: "flex-start", gap: "20px", textAlign: "center", alignItems: "center", position: "relative", left: "40px", top: "20px" }}>
                    <img src={no3} alt="no" style={{ height: "40px", width: "40px" }} />
                    <Typography sx={{ color: "rgba(5, 25, 44, 1)", fontSize: "18px", fontWeight: "700" }}>Provide speacial instruction(optional)</Typography>
                </Box>

                <Box sx={{ position: "relative", left: "60px", top: "80px", display: "flex", }}>
                    <input type="checkbox" />Give special instructions to the charity

                </Box>
            </Box>



        </Box>

    )
}

export default SendGrant;






















