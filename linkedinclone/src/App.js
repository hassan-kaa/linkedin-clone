import Navbar from "./components/Navbar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}
              
/>
        
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      
    </div>
  );
}

export default App;