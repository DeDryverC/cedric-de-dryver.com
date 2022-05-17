import React, { useCallback, useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import {IoSadOutline} from 'react-icons/io5'
import '../App.css';

function Portfolio() {
    const [matches, setMatch] = useState(null)

    const handler = e => setMatch(e.matches);
    useEffect(() => {
        const interval = setInterval(() => {
            window.matchMedia("(min-width: 1350px)").addEventListener('change', handler);
          }, 2000);
        return () => clearInterval(interval);
    }, []);
    return(
        <>
        <div className="skills">
        <br/>
        <h1 className="portfolio-title">Portfolio</h1>
        <hr/>
        <br/>
        </div>
        <div className="portfolio">
        <br/>
        
            <div className="skills">
                {matches &&
                <Table striped hover bordered className='portfolio-table'>
                    <thead>
                        <th className="portfolio-font"><b>Thème</b></th>
                        <th className="portfolio-font"><b>Activité</b></th>
                        <th className="portfolio-font"><b>Date</b></th>
                        <th className="portfolio-font"><b>Heure valorisées</b></th>
                        <th className="portfolio-font"><b>Heures réelles</b></th>
                        <td className="portfolio-font">Details</td>
                        <th className="portfolio-font"><b>Preuve</b></th>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="portfolio-font"><b>Animation</b></td>
                            <td>Chef Scout Salzinnes</td>
                            <td>Année 2019 - 2021</td>
                            <td>10h</td>
                            <td>+300h</td>
                            <td></td>
                            <td><a href="https://scoutssalzinnes.be/">https://scoutssalzinnes.be/</a><br/><br/>
                                <a href="https://tinyurl.com/scoutsalz">Facebook des scout de Salzinnes</a></td>
                            
                        </tr>
                        <tr>
                            <td className="portfolio-font"><b>Echange international</b></td>
                            <td>Semaine international</td>
                            <td>1 - 5 mars 2021</td>
                            <td>10h</td>
                            <td>30h</td>
                            <td></td>
                            <td><a href=".\Documents\Cedric De Dryver.pdf" target="_blank">Certificat</a></td>
                        </tr>
                        <tr>
                            <td className="portfolio-font"><b>Assistance<br/>Helpdesk</b></td>
                            <td>Assistance lors de l'évenement "Pitch Party"</td>
                            <td>16 decembre 2020<br/>préparation depuis le 10/12</td>
                            <td>10h</td>
                            <td>20h</td>
                            <td></td>
                            <td><a href=".\Documents\DeDryver_Cédric.pdf" target="_blank">Certificat</a></td>
                        </tr>
                        <tr>
                            <td className="portfolio-font"><b>Formation</b></td>
                            <td>Apprentissage du néerlandais sur Duolingo</td>
                            <td>Mars 2022 - Maintenant</td>
                            <td>10h</td>
                            <td>35h</td>
                            <td></td>
                            <td><a href="https://www.duolingo.com/profile/OinkOink__" target="_blank">duolingo.com</a><br/><br/></td>
                        </tr>
                        <tr>
                            <td className="portfolio-font"><b>Developpement Web</b></td>
                            <td>Mise en place et maintenance du site de la Caracole Namuroise</td>
                            <td>Année 2021 - Mainteant</td>
                            <td>10h</td>
                            <td>40h</td>
                            <td></td>
                            <td><a href="https://www.caracole-namuroise.be/" target="_blank">www.caracole-namuroise.be</a><br/><br/></td>
                        </tr>
                        <tr>
                            <td className="portfolio-font"><b>Esport</b></td>
                            <td>LAN Virtuelle CSGO</td>
                            <td>10 avril 2021</td>
                            <td>4h</td>
                            <td>4h</td>
                            <td></td>
                            <td><a href="https://www.facebook.com/events/2794164807560553?ref=newsfeed" target="_blank">Lien evenement facebook</a><br/><br/>
                            <a href="https://clips.twitch.tv/CrackyGlamorousCrabNomNom-7utedpejxHcExiHH?tt_content=url&tt_medium=clips_api" target="_blank">Clip twitch a la fin de l'event</a><br/><br/>
                            <a href="https://clips.twitch.tv/DeliciousCrepuscularBeeGingerPower-5yj_AqVJDqXGGc4g">Clip twitch (Preuve OinkOink)</a></td>
                        </tr>
                        <tr>
                            <td className="portfolio-font">Divertissement</td>
                            <td>Streaming et chaine Youtube</td>
                            <td>Année 2020 - Maintenant</td>
                            <td>6h</td>
                            <td>30h</td>
                            <td></td>
                            <td><a href="https://www.twitch.tv/oiinkoiink" target="_blank">Twitch.tv</a><br/><br/><a href="https://www.youtube.com/channel/UC96Q3CfAA0uAqOsngmhBaKw" target="_blank">Youtube.com</a></td>
                        </tr>
                        <tr>
                            <td className="portfolio-font">Total</td>
                            <td></td>
                            <td></td>
                            <td>60h</td>
                            <td>+459h</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>}
                {!matches &&
                <div className="portfolio-err"><h1 className="portfolio-err-h1">Désolé</h1>
                <br/>
                <IoSadOutline size={150}/>
                <br/>
                <br/>
                <p>Il est impossible d'afficher le portfolio sur téléphone pour l'instant.
                Vous pouvez toutefois le consulter sur un écran plus large (un ordinateur)
                si vous avez la possibilité de le faire.</p>
                <br/><br/><br/></div>}
                
                <br/>
            </div>
            
        </div><br/>
        <div><hr/></div>
        <div className="footer-custom"><br/>
                <p>Made with ReactJS - Copyright © 2022 - Cédric De Dryver</p><br/>
                <p>OVHCould - VPS - DNS</p><br/>
            </div>
        </>
    )

}
export default Portfolio;