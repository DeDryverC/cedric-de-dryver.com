import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';

function Skills() {
    return(
        <>
        <div className="skills">
            <div className="skills-left">
                <span className="skills-title"> Compétences techniques</span><br/>
                <span className="skills-left-txt">
                    <p>Voici mes compétences techniques : </p>
                    <ul>
                        <li>Developpement applicatif :  Python - Java - Kotlin - C (Base)</li>
                        <li>Developpement Web FullStacks :  HTML 5 - ReactJS - NodeJS </li>
                        <li>Base de Donnée :  MySQL - Firebase</li>
                        <li>Réseau :  Aruba - Cisco</li>
                        <li>Gestionnaire de code : Github</li>
                        <li>Système d'Exploitation : Windows, Ubuntu, Debian</li>
                        <li>Applications Diverse : Docker, Wireshark, PuTTy, VSCode</li>
                    </ul>
                </span>
            </div>
            <div className="skills-right">
                <span className="skills-title"> Soft Skills</span><br/>
                <span className="skills-right-txt">
                <p>Voici mes "Soft Skills" (Compétences Générales)</p>
                <ul>
                    <li>Editeur Photo : Photoshop, Gimp</li>
                    <li>Editeur Video : Camtasia</li>
                    <li>Modérateur de groupe Facebook (entre 5k et 6k membres)</li>
                    <li>Utilisation de LaTeX</li>
                </ul>
                </span>
            </div>
            <div className="skills-left">
                <span className="skills-title"> Experiences </span><br/>
                <span className="skills-left-txt">
                <ul>
                    <li>Aide de cuisine lors d'évenement - Student job : Préparation, dressage de plat et mises en bouche.</li>
                    <li>Helpdesk lors d'évenement "Pitch Party" organisé par l'Ephec au printemp 2020</li>
                    <li>Mise en place du site web de la Caracole Namuroise</li>
                    <li>Stage chez Worldwide Fight Services - Support de niveau 1 & 2, Administration réseau, Configuration réseau, transition de leur intranet
                        du web1 vers du web2.
                    </li>
                </ul>
                </span>
            </div>
            <div className="skills-right">
                <span className="skills-title"> Langues</span><br/>
                <span className="skills-right-txt">
                    <ul>
                        <li>Français : Natif</li>
                        <li>Anglais : Niveau B2 - C1</li>
                        <li>Néerlandais : Débutant</li>
                        <li>Espagnol : Débutant</li>
                    </ul>

                </span>
            </div>
            
        </div><br/>
        <div><hr/></div>
        <div className="footer-custom">
            <p>Made with React - Copyright © 2022 - Cédric De Dryver</p><br/>
            <p>Mention légales</p><br/>
        </div>
        </>
    )

}
export default Skills;