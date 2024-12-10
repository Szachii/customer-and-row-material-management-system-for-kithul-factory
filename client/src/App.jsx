import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Register from "./pages/Register";
import Login from "./pages/Login";
import BankDetails from "./pages/BankDetails";

function App() {

  return (

    <Routes>
      <Route exact path="/" element={<Welcome />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Register2" element={<BankDetails />} />
    </Routes>



  );
}

export default App
