import './App.css';
import Nav from './Nav';
import Home from '../Home';
import Contact from '../Contact';
import About from '../About';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
       <Router>
         <Routes>
           <Route exact path="/" element={<Home/>}/>
           <Route exact path="/about" element={<About/>}/>
           <Route exact path="/contact" element={<Contact/>}/>
         </Routes>
         </Router>
  );
}


export default App;
