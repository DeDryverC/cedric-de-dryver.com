import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import particlesOptions from "./particles.json";
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
            <Navbar/>
            <div className="intro">
                <img src="./Images/pp.JPG" className='pp'/>
            
                <span className="title"> Bienvenue ! </span>
            </div>
            <div className="how-am-i">
                <span className="how-am-i-title"><b>Qui suis-je ?</b></span><br/><br/>
                <span>
                Je suis un passionné d'informatique<b>,</b> mais aussi étudiant en 3ème année a l'Ephec en technologies de l'informatique.
                <br/><br/>
                J'adore le développement, que ce soit web ou applicatif fullstacks. Depuis 2ans j'essaye de m'améliorer en ReactJS afin que cela devienne ma spécialité.
                <br/><br/>
                Le tout sans délaisser le Python, Java, Kotlin, sur lesquels j'ai développé ,au cours des dernières années, une certaine maitrise.
                <br/><br/>
                Lors de mon cursus et de mon stage, j'ai pu développer aussi des compétences dans le reseau informatique, l'administration réseau, le support informatique de niveau 1 et 2, ainsi que dans l'éléctronique.
                </span><br/><br/><hr/><br/>
                <span className="how-am-i-title"><b>Quels sont mes objectif ?</b></span><br/><br/>
                <span>Je finirais probablement mes études en Septembre 2022, et je suis donc actuellement a la recherche d'un poste dans l'IT.<br/><br/>
                Plutôt orienté developpement, car cela reste le domaine que je maitrise le mieux, mais j'ai quelques experiences dans le support informatique de niveau 1 & 2<br/><br/>
                Si vous êtes intérressé, vous pouvez trouver mes informations pour me contacter ici:<br/><br/>
                <Button variant="outline-info" size="lg">{'   '}   Info   {'   '}</Button>
                </span><br/><br/><br/>

            </div>
            <br/>
            <div><hr/></div>
            <div className="footer-custom">
                <hr/>
                <p>Made with React - Copyright © 2022 - Cédric De Dryver</p><br/>
                <p>Mention légales</p>
            </div>
        </div>
    );
}

export default App;
