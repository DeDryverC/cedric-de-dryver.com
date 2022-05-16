import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import {BsMessenger, BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import '../App.css';

function Skills() {
    return(
        <>
        <div className="skills">
            <div className="contact">
                <h3>Contact</h3>
                <hr/>
                <p>Voici les différents lien pour me contacter</p>
                <table>
                    <tr>
                        <td className="contact-logo"><BsMessenger size={30}/></td>{' '}
                        <td className="contact-logo"><BsLinkedin size={30}/></td>
                        <td className="contact-logo"><BsWhatsapp size={30}/></td>
                    </tr>
                </table>
                <p>Vous pouvez aussi me contacter sur mon adresse mail </p>
                <p>Et voici quelques liens divers</p>
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