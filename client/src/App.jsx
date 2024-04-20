import React from "react";
import Navbar from "./components/layout/Navbar";
import CustomFooter from "./components/layout/customFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Register from './pages/Register'
import Results from './pages/Results'
import TutorProfile from './pages/TutorProfile'
import TutorProfilePage from "./pages/TutorProfilePage";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/results" element={<Results/>}/>
          <Route path="/tutorprofile" element={<TutorProfile/>}/>
          <Route path="/tutor/:userId" element={<TutorProfilePage/>}/>
        </Routes>
        <CustomFooter/>
      </div>
    </BrowserRouter>
  );
}

export default App;
