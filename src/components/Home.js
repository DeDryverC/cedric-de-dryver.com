import React, { useCallback,useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { Button, Image } from 'react-bootstrap';
import ProfilePic from '../Images/pp.jpg'
import '../App.css';

function Home() {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const matches = width >= 1350;
    const matcheslil = width >=600
    return(
        <>  
        {matches && <>
            <div className="intro">
                <Image src={ProfilePic} className='pp' alt="Photo de profil"/>
                <span className="title"> Bienvenue ! </span>
            </div>
            <div className="home-background">
               <div className="how-am-i">
                    <span className="how-am-i-title"><b>Qui suis-je ?</b></span><br/><br/>
                    <span>
                    Je suis un passionné d'informatique<b>,</b> mais aussi étudiant en 3e année a l'Ephec en technologies de l'informatique.
                    <br/><br/>
                    J'adore le développement, que ce soit web ou applicatif fullstacks. Depuis 2 ans j'essaye de m'améliorer en ReactJS afin que cela devienne ma spécialité.
                    <br/><br/>
                    Le tout sans délaisser le Python, Java, Kotlin, sur lesquels j'ai développé, au cours des dernières années, une certaine maitrise.
                    <br/><br/>
                    Lors de mon cursus et de mon stage, j'ai pu développer aussi des compétences dans le réseau informatique, l'administration réseau, le support informatique de niveau 1 et 2, ainsi que dans l'électronique.
                    </span><br/><br/><hr/><br/>
                    <span className="how-am-i-title"><b>Quels sont mes objectifs ?</b></span><br/><br/>
                    <span>Je finirais probablement mes études en septembre 2022, et je suis donc actuellement à la recherche d'un poste dans l'IT.<br/><br/>
                    Plutôt orienté développement, car cela reste le domaine que je maîtrise le mieux, mais j'ai quelques expériences dans le support informatique de niveau 1 & 2.<br/><br/>
                    Si vous êtes intéressé, vous pouvez trouver mes informations pour me contacter ici :<br/><br/>
                    </span><Link to="/infos"><div className="d-grid gap-2"><Button variant="outline-info">{'   '}   <b>Informations </b>  {'   '}</Button></div></Link>
                    <br/><br/><br/>

                </div>
            
            <br/>
            <hr/>
            </div>
            <div className="footer-custom"><br/>
                <p>Made with ReactJS - Copyright © 2022 - Cédric De Dryver</p><br/>
                <p>OVHCould - VPS - DNS</p><br/>
            </div>
            </>}
        {!matches && 
        <>
            <div className="intro">
                <Image src={ProfilePic} className='pp' alt="Photo de profil"/>{!matcheslil && <br/>}
                <span className="title"> Bienvenue ! </span>
                <hr/>
                <div className="how-am-i">
                    <span className="how-am-i-title"><b>Qui suis-je ?</b></span><br/><br/>
                    <span>
                    Je suis un passionné d'informatique<b>,</b> mais aussi étudiant en 3e année a l'Ephec en technologies de l'informatique.
                    <br/><br/>
                    J'adore le développement, que ce soit web ou applicatif fullstacks. Depuis 2 ans j'essaye de m'améliorer en ReactJS afin que cela devienne ma spécialité.
                    <br/><br/>
                    Le tout sans délaisser le Python, Java, Kotlin, sur lesquels j'ai développé, au cours des dernières années, une certaine maitrise.
                    <br/><br/>
                    Lors de mon cursus et de mon stage, j'ai pu développer aussi des compétences dans le réseau informatique, l'administration réseau, le support informatique de niveau 1 et 2, ainsi que dans l'électronique.
                    </span><br/><br/><hr/><br/>
                    <span className="how-am-i-title"><b>Quels sont mes objectifs ?</b></span><br/><br/>
                    <span>Je finirais probablement mes études en septembre 2022, et je suis donc actuellement à la recherche d'un poste dans l'IT.<br/><br/>
                    Plutôt orienté développement, car cela reste le domaine que je maîtrise le mieux, mais j'ai quelques expériences dans le support informatique de niveau 1 & 2.<br/><br/>
                    Si vous êtes intéressé, vous pouvez trouver mes informations pour me contacter ici :<br/><br/>
                    </span><Link to="/infos"><Button variant="outline-info" className="buttonMini">{'   '}   <b>Informations </b>  {'   '}</Button></Link>
                    <br/><br/><br/>

                </div>
            <br/>
            <hr/>
            </div>
            <div className="footer-customMini"><br/>
                <p>Made with ReactJS - Copyright © 2022 - Cédric De Dryver</p><br/>
                <p>OVHCould - VPS - DNS</p><br/>
            </div>
        </>
        }
        </>
        )
}
export default Home;