import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './components/Home';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio'
import Info from './components/Info'
import Navbar from './components/Navbar';
import './App.css';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <Router>
                <Particles options={particlesOptions} init={particlesInit}/>
                <Navbar/>
                <Switch>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/Skills" element={<Skills/>}/>
                    <Route path="/Portfolio" element={<Portfolio/>}/>
                    <Route path="/Informations" element={<Info/>}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
