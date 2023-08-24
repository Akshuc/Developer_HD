// Routes for Charity and Grant pages
import { Route, Routes } from "react-router-dom";

// Pages
import Grant from './pages/Grant';
import Home from "./pages/Home";
import Give from "./pages/Give";
import Favorutes from "./pages/Favorutes";
import Activity from "./pages/Activity";
import Legacy from "./pages/Legacy";

import Navbar from '../src/components/Navbar'
import { Box, Container } from "@mui/material";
import Header from "./components/Header";
import SendGrant from "./pages/SendGrant";

const App = () => {
  return (
    <Box sx={{background:"rgba(244, 246, 250, 1"}}>
    <Header/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/grant" element={<Grant/>}/>
      <Route path="/give" element={<Give/>}/>
      <Route path="/favorites" element={<Favorutes/>}/>
      <Route path="/activity" element={<Activity/>}/>
      <Route path="/legacy" element={<Legacy/>}/>
      <Route path="/sendGrant" element={<SendGrant/>}/>
      
    </Routes>

    </Box>
  )
}

export default App;