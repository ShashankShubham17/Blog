import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import LandingPage from "./componets/landingpage/landingpage";
import SignUp from "./componets/SignUp/SignUp";
import Login from "./componets/Login/Login.jsx";
import MediumHomePage from "./componets/mediumsignup/mediumhomepage.jsx";
import Mediumsignup from "./componets/mediumsignup/mediumsingup";
import Ourstory from "./componets/ourstory/ourstory";
import Membership from "./componets/Membership/Membership.jsx";
import Write from "./componets/Write/write.jsx";
import Navbar from "./componets/Navbar/Navbar"; // ✅ Update this path based on your file structure

import 'bootstrap/dist/css/bootstrap.min.css';

function AppLayout() {
  const location = useLocation();
  const hideNavbarPaths = ['/login', '/SignUp', '/mediumsignup'];

  const showNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Mediumhomepage" element={<MediumHomePage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mediumsignup" element={<Mediumsignup />} />
        <Route path="/ourstory" element={<Ourstory />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/Write" element={<Write />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
