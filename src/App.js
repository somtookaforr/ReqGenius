import React from "react";
import { DataProvider } from "./components/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./layouts/auth/Login";
import Register from "./layouts/auth/Register";
import Index from "./layouts/pages/Index";
import Dashboard from "./layouts/pages/Dashboard";
import Profile from "./layouts/pages/Profile";
import './App.css'

export const userEndpoint = `https://finalyearproject-n1q1.onrender.com/api/users`;
export const adminEndpoint = `https://finalyearproject-n1q1.onrender.com/api/admin`;
export const accessToken = localStorage.getItem("accessToken");
function App() {
  return (
    <div className="App">
    <Router>
      <DataProvider>
      <Routes>
        <Route exact path='/' element={<Index />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/dashboard/' element={<Dashboard />} />
        <Route exact path='/dashboard/:id' element={<Dashboard />} />
        <Route exact path='/profile' element={<Profile />} />
      </Routes>
      </DataProvider>
    </Router>      
    </div>
  );
}

export default App;