import React, { useCallback } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import {BsMessenger, BsLinkedin, BsTwitter, BsDiscord, BsInstagram, BsGithub, BsYoutube, BsTwitch, BsDownload} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import '../App.css';

function Skills() {
    return(
        <>
        <div className='home-background2'>
        <div className="contact">
            <div className="skills"><br/>
                <h1>Contacts</h1>
                <hr/><br/>
                <p>Voici les différents liens pour me contacter :</p>
                <a  href="https://www.facebook.com/dedryverc" target="_blank"><BsMessenger className="contact-logo" size={50}/></a>
                <a  href="https://www.linkedin.com/in/cdedryver/" target="_blank"><BsLinkedin className="contact-logo" size={50}/></a>
                <a  href="https://twitter.com/seldricdd" target="_blank"><BsTwitter className="contact-logo"  size={50}/></a>
                <a  onClick={() => alert("   Ajoute moi sur Discord ! \n    - - -  \n    Oink Oink#0404\n    - - -  ")} target='_blank' className='discord'><BsDiscord className="contact-logo" size={50}/></a><br/><br/>
                <p>Vous pouvez aussi me contacter sur mon adresse mail : </p><br/>
                <a  href="mailto:dedryver.cedric@gmail.com" target="_blank"><MdEmail size={70}/><br/><br/></a><br/><br/>
                <h1>Curriculum Vitae</h1><hr/><br/>
                <p>Mes différentes compétences sont reprises ici dans mon CV, disponible ci-dessous :</p>
                <ButtonGroup><Button variant="outline-info" onClick={()=>window.open('./Documents/Curriculum Vitae - Cedric De Dryver FR.pdf')}><b>C.V [FR]</b></Button><Button variant="outline-info"><a href='./Documents/Curriculum Vitae - Cedric De Dryver FR.pdf' download={'Curriculum Vitae - Cedric De Dryver FR.pdf'} ><BsDownload size={20}/></a></Button></ButtonGroup>{' '}
                <ButtonGroup><Button variant="outline-info" onClick={()=>window.open('./Documents/Curriculum Vitae - Cedric De Dryver EN.pdf')}><b>C.V [EN]</b></Button><Button variant="outline-info"><a href='./Documents/Curriculum Vitae - Cedric De Dryver EN.pdf' download={'Curriculum Vitae - Cedric De Dryver EN.pdf'} ><BsDownload size={20}/></a></Button></ButtonGroup><br/><br/><hr/><br/>
                <p>Et voici quelques liens divers :</p>
                <a href="https://www.instagram.com/ced.dd/" target="_blank"><BsInstagram className="contact-logo"  size={50}/></a>
                <a href="https://github.com/DeDryverC" target='_blank'><BsGithub className="contact-logo"  size={50}/></a>
                <a href="https://www.youtube.com/channel/UC96Q3CfAA0uAqOsngmhBaKw" target="_blank"><BsYoutube className="contact-logo" size={50}/></a>
                <a href="https://www.twitch.tv/oiinkoiink" target="_blank"><BsTwitch  className="contact-logo" size={50}/></a><br/>
            </div>
            
        </div><br/>
        <hr/></div>
        <div className="footer-custom"><br/>
                <p>Made with ReactJS - Copyright © 2022 - Cédric De Dryver</p><br/>
                <p>OVHCould - VPS - DNS</p><br/>
            </div>
        </>
    )

}
export default Skills;