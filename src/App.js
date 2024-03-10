import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./layouts/auth/Login";
import Register from "./layouts/auth/Register";
import Index from "./layouts/pages/Index";
import Dashboard from "./layouts/pages/Dashboard";
import Profile from "./layouts/pages/Profile";
import './App.css'

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path='/' element={<Index />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/profile' element={<Profile />} />
      </Routes>
    </Router>      
    </div>
  );
}

export default App;