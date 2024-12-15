import React from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Register from "./pages/Register";
import Login from "./pages/Login";
import BankDetails from "./pages/BankDetails";
import {Toaster} from 'react-hot-toast'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {

  return (
    <>
    <Toaster position="bottom-right" toastOptions={{duration:2000}}/>
    <Routes>
      <Route exact path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register2" element={<BankDetails />} />
    </Routes>

    </>

  );
}

export default App
