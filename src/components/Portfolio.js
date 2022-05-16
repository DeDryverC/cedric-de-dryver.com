import React, { useCallback } from 'react';
import { Button, Table } from 'react-bootstrap';
import '../App.css';

function Portfolio() {
    return(
        <>
        <div className="portfolio">
            <div className="skills">
                <br/>
                <Table striped hover>
                    <thead>
                        <th><b>Thème</b></th>
                        <th><b>Activité</b></th>
                        <th><b>Date</b></th>
                        <th><b>Heure valorisées</b></th>
                        <th><b>Heures réelles</b></th>
                        <th><b>Preuve</b></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Animation</b></td>
                            <td>Chef Scout Salzinnes</td>
                            <td>Année 2019 - 2021</td>
                            <td>10h</td>
                            <td>+300h</td>
                            <td>https://scoutssalzinnes.be/<br/>
                                https://tinyurl.com/scoutsalz</td>
                            
                        </tr>
                        <tr>
                            <td><b>Echange international</b></td>
                            <td>Semaine international</td>
                            <td>1 - 5 mars 2021</td>
                            <td>10h</td>
                            <td>30h</td>
                            <td><a href="">Certificat</a></td>
                        </tr>
                        <tr>
                            <td><b>Assistance<br/>Helpdesk</b></td>
                            <td>Assistance lors de l'évenement "Pitch Party"</td>
                            <td>16 decembre 2020<br/>préparation depuis le 10/12</td>
                            <td>10h</td>
                            <td>20h</td>
                            <td><a href="">Certificat</a></td>
                        </tr>
                        <tr>
                            <td><b>Formation</b></td>
                            <td>Apprentissage du néerlandais sur Duolingo</td>
                            <td>Fevrier 2022 - Maintenant</td>
                            <td>10h</td>
                            <td>35h</td>
                            <td><a href="https://www.duolingo.com/profile/OinkOink__">duolingo.com</a></td>
                        </tr>
                        <tr>
                            <td><b>Developpement Web</b></td>
                            <td>Mise en place et maintenance du site de la Caracole Namuroise</td>
                            <td>Année 2021 - Mainteant</td>
                            <td>10h</td>
                            <td>40h</td>
                            <td><a href="https://www.caracole-namuroise.be/">www.caracole-namuroise.be</a></td>
                        </tr>
                        <tr>
                            <td><b>Esport</b></td>
                            <td>LAN Virtuelle CSGO</td>
                            <td>10 avril 2021</td>
                            <td>4h</td>
                            <td>4h</td>
                            <td><a href="https://www.facebook.com/events/2794164807560553?ref=newsfeed">Lien evenement facebook</a><br/>
                            <a href="">Rediffusion personnel Twitch</a></td>
                        </tr>
                        <tr>
                            <td>Divertissement</td>
                            <td>Streaming et chaine Youtube</td>
                            <td>Année 2020 - Maintenant</td>
                            <td>6h</td>
                            <td>30h</td>
                            <td><a href="">Twitch.tv</a><br/><a href="">Youtube.com</a></td>
                        </tr>
                    </tbody>
                </Table>
                <br/>
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
export default Portfolio;