import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter , Route ,Routes} from "react-router-dom";

import Home from"../src/router/Home";
import Destination from"../src/router/Destination"
import Crew from "../src/router/Crew"
import Technology from "../src/router/Technology"

ReactDOM.render(
  
<BrowserRouter>
<Routes>
    
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path='/destination' element={<Destination/>}/>
      <Route path='/crew' element={<Crew/>}/>
      <Route path='/technology' element={<Technology/>}/>
    </Route>

</Routes>
</BrowserRouter>,
  document.getElementById('root')
);


