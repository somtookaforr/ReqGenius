import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./layouts/auth/Login";
import Register from "./layouts/auth/Register";
import Index from "./layouts/pages/Index";
import Dashboard from "./layouts/pages/Dashboard";
import './App.css'

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/index' element={<Index />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/dashboard' element={<Dashboard />} />

      </Routes>
    </Router>      
    </div>
  );
}

export default App;