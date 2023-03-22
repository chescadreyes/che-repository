import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";

import Navbar from "./components/elements/Navbar";

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>        
        </Router>
    );
}

export default App;