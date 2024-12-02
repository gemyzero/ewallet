import { useEffect, useRef, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import deposit from './assets/deposit.gif'
import withdrow from './assets/withdraw.gif'

import React from 'react'
import Balnce from "./Componets/Balnce";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Look from "./Componets/Look";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/"  >
          <Route index element={<Look></Look>}/>
          <Route path="balnce" element={<Balnce></Balnce>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
