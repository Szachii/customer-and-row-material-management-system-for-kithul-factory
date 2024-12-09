import React from "react";
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <Routes>
      <Route exact path='/' element={<Welcome/>}/>
    </Routes>

  )
}

export default App
