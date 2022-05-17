import React, { useCallback } from 'react';
import { Button, Table } from 'react-bootstrap';
import '../App.css';

function Portfolio() {
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
                <Table striped hover bordered className='portfolio-table'>
                    <thead>
                        <th><b>Thème</b></th>
                        <th><b>Activité</b></th>
                        <th><b>Date</b></th>
                        <th><b>Heure valorisées</b></th>
                        <th><b>Heures réelles</b></th>
                        <td>Details</td>
                        <th><b>Preuve</b></th>
                    </thead>

                    <tbody>
                        <tr>
                            <td><b>Animation</b></td>
                            <td>Chef Scout Salzinnes</td>
                            <td>Année 2019 - 2021</td>
                            <td>10h</td>
                            <td>+300h</td>
                            <td></td>
                            <td><a href="https://scoutssalzinnes.be/">https://scoutssalzinnes.be/</a><br/><br/>
                                <a href="https://tinyurl.com/scoutsalz">Facebook des scout de Salzinnes</a></td>
                            
                        </tr>
                        <tr>
                            <td><b>Echange international</b></td>
                            <td>Semaine international</td>
                            <td>1 - 5 mars 2021</td>
                            <td>10h</td>
                            <td>30h</td>
                            <td></td>
                            <td><a href="" target="_blank">Certificat</a></td>
                        </tr>
                        <tr>
                            <td><b>Assistance<br/>Helpdesk</b></td>
                            <td>Assistance lors de l'évenement "Pitch Party"</td>
                            <td>16 decembre 2020<br/>préparation depuis le 10/12</td>
                            <td>10h</td>
                            <td>20h</td>
                            <td></td>
                            <td><a href="" target="_blank">Certificat</a></td>
                        </tr>
                        <tr>
                            <td><b>Formation</b></td>
                            <td>Apprentissage du néerlandais sur Duolingo</td>
                            <td>Mars 2022 - Maintenant</td>
                            <td>10h</td>
                            <td>35h</td>
                            <td></td>
                            <td><a href="https://www.duolingo.com/profile/OinkOink__" target="_blank">duolingo.com</a><br/><br/></td>
                        </tr>
                        <tr>
                            <td><b>Developpement Web</b></td>
                            <td>Mise en place et maintenance du site de la Caracole Namuroise</td>
                            <td>Année 2021 - Mainteant</td>
                            <td>10h</td>
                            <td>40h</td>
                            <td></td>
                            <td><a href="https://www.caracole-namuroise.be/" target="_blank">www.caracole-namuroise.be</a><br/><br/></td>
                        </tr>
                        <tr>
                            <td><b>Esport</b></td>
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
                            <td>Divertissement</td>
                            <td>Streaming et chaine Youtube</td>
                            <td>Année 2020 - Maintenant</td>
                            <td>6h</td>
                            <td>30h</td>
                            <td></td>
                            <td><a href="">Twitch.tv</a><br/><br/><a href="">Youtube.com</a></td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td></td>
                            <td></td>
                            <td>60h</td>
                            <td>+459h</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
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