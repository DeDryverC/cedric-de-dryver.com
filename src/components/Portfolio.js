import React, { useCallback, useState, useEffect } from 'react';
import { Button, Image, Table, Modal } from 'react-bootstrap';
import Scout from '../Images/scout.JPG'
import Caracole from '../Images/caracole.jpg'
import Minecraft from '../Images/minecraft.jpg'
import {IoSadOutline} from 'react-icons/io5'
import '../App.css';

function Portfolio() {
    const [width, setWidth] = useState(window.innerWidth);
    const [title, setTitle] = useState(null);
    const [show, setShow] = useState(false);
    const [image, setImage] = useState(null)

    const handleClose = () => {setShow(false); setTitle(null);}
    const handleShow = () => {setShow(true);}

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    const showModal = (item) =>{
        handleShow()
        setTitle(item)
    }

    const showModalData = (item) =>{
        if(item == 'scout'){
            return(
                <>
                    <Modal.Header closeButton>
                    <Modal.Title>Scoutisme</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                     J'ai découvert le scoutisme grâce à un ami qui était chef scout de l'unité de Salzinne.<br/>
                     J'ai fait un premier camp pendant l'été 2018 en tant qu'intendant et j'ai beaucoup aimé l'expérience, j'y suis resté du début jusqu'à la fin..<br/>
                     J'ai réitéré l'année d'après et je me suis décidé à la fin du camp de devenir chef scout l'année suivante.<br/>
                     En septembre 2019, je suis devenu chef scout et j'y suis resté pendant 2 ans à créer des activités, a animer des jeunes de 12 à 16 ans, lors de réunion tous les dimanches, ainsi que pendant certains week-ends et pendant le camp de l'été.<br/>
                     Je n'avais jamais fait de scoutisme avant cela, mais j'ai énormément appris, que ce soit sur la nature, sur les constructions, sur les repas à faire pour nourrir toute la section...<br/>
                     J'ai aussi développé des compétences dans l'animation, en organisation et en communication. <br/><br/>
                     Ce fut une très belle expérience, mais par manque de temps, je n'ai pas su m'impliquer davantage...<br/><br/>
                     <Image src={Scout} width='100%' heigh='100%'/>  </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={()=>handleClose()}>
                        Close
                    </Button>
                    </Modal.Footer>
                </>
            )
        }
        if(item == 'echange'){
            return(
                <>
                    <Modal.Header closeButton>
                    <Modal.Title>Echange International</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Début Q2 en 2021, lorsque j'étais en 2e année a l'Ephec, nous avons passé un échange international en ligne.<br/>
                        Pendant une semaine, nous devions réfléchir en groupe avec des personnes venant des 4 coins du globe sur le thème de Global Innovation, en étant régi par l'université de Cardiff.<br/><br/>
                        Malheureusement, à cause des règles sanitaires, je n'ai pas pu partir à Eindhoven pour participer a un projet lié a la robotique, ce qui était initialement prévu.<br/>
                        Néanmoins, lors de cette semaine virtuelle, j'ai pu découvrir l'université de Cardiff, ainsi que rencontrer des personne vivant en Inde, en Espagne, etc.<br/>
                        J'ai pu développer ma connaissance de l'anglais, notre moyen de communication le plus adapté pour mener un projet international.<br/>
                        Nous avons aussi appris beaucoup sur la culture galloise, avec des intervenant locaux de Cardiff, qui nous ont fait des conférences sur la culture folklorique, la culture culinaire et historique local.</Modal.Body>

                    <Modal.Footer>
                    <Button variant="secondary" onClick={()=>handleClose()}>
                        Close
                    </Button>
                    </Modal.Footer>
                </>
            )
            
        }
        if(item == 'pitch'){
            return(
                <>
                    <Modal.Header closeButton>
                    <Modal.Title>Helpdesk @ Pitch Party</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    En octobre 2020, nous avons reçu une annonce dans notre boite mail, en effet à cause du covid, un événement de l'Ephec qui devait se passer en présentiel fut transformé en distanciel.<br/><br/>
                    
                    Cet événement, c'était la pitch party de l'Ephec, ou des groupe avec un projet d'entreprise devait défendre leur projet devant un jury, avec des spectateurs qui pouvait écouter et voir leur pitch.<br/>
                    Tout allait se passer sur discord pour cet événement distanciel, et comme les TI de l'Ephec sont assez souvent des utilisateurs récurrent de discord, on nous a demandé de faire partie de la team Helpdesk.<br/>
                    Notre job consistait en amont, à aider les personnes (Spectateurs,membres du jury ou étudiants) a créer leurs compte et se familiariser avec la plateforme. Puis le jour J, nous devions être tout le temps présent pour répondre rapidement à un souci technique.<br/><br/>
                    Malgré quelques incidents mineurs, l'événement a toutefois été une réussite pour notre équipe. Il y avait des 2e et 3e années de Ti dans cette équipe et le feeling passait super bien, et l'entreprise qui dirigeait l'événement a vraiment été satisfait de notre travail. </Modal.Body>

                    <Modal.Footer>
                    <Button variant="secondary" onClick={()=>handleClose()}>
                        Close
                    </Button>
                    </Modal.Footer>
                </>
            )
            
        }
        if(item == 'duolinguo'){
            return(
                <>
                    <Modal.Header closeButton>
                    <Modal.Title>Apprentissage Néerlandais</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    En Mars 2022, lors de mon stage en entreprise, j'ai décider d'apprendre le néerlandais.<br/>
                    j'ai pris cette décision car la où je fais mon stage, ils parlent tous pour la plupart néerlandais (car ils sont majoritairement Flamands),<br/>
                    Afin de mieux m'intégrer, j'ai décidé de me former sur duolinguo, une plateforme d'apprentissage de langues.<br/>
                    Je suis donc actuellement cette formation en Anglais - Néerlandais (le Français - Néerlandais étant indisponible).<br/><br/>
                    De plus, connaitre cette langue est un atout si l'on veut travailler en Belgique, donc intéressant pour mes projets profesionnels<br/></Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={()=>handleClose()}>
                        Close
                    </Button>
                    </Modal.Footer>
                </>
            )
            
        }
        if(item == 'rootme'){
            return(
                <>
                    <Modal.Header closeButton>
                    <Modal.Title>Apprentissage RootMe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    Root-me est une plateforme Française d'apprentissage sur la sécurité Informatique.<br/>
                    J'ai commencé cette formation en 2019 car je voulais découvrir la sécurité informatique car je voulais, a ce moment la, faire un Master dans la cybersécurité.<br/>
                    J'ai compléter quelques challenges, passé beaucoup de temps a essayer d'en résoudres certains sans vraiment y parvenir..<br/>
                    Néanmoins, cela reste très intéressant, avec un communauté assez active et serieuse.</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={()=>handleClose()}>
                        Close
                    </Button>
                    </Modal.Footer>
                </>
            )
            
        }
        if(item == 'caracole'){
            return(
                <>
                    <Modal.Header closeButton>
                    <Modal.Title>Site internet de la Caracole Namuroise</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    L'Ordre de la Caracole Namuroise (OCN) est un ordre louvaniste folklorique, dont je fais partie.<br/><br/>
                    Afin d'expandre notre folklore, nos culture etc, la commanderie de 2021-20222 nous ont demandé de faire un site internet, regroupant différentes informations.<br/>
                    Avec l'aide d'un autre membre, nous avons créer le site <a href="https://www.caracole-namuroise.be/" target="_blank">www.caracole-namuroise.be</a>, qui n'est pas encore complet a ce jours, mais le gros-oeuvre est deja présent.<br/><br/>
                    Les buts de l’OCN sont la promotion du folklore, des traditions, des spécificités et des spécialités namuroises ; la perpétuité des connaissances des chants estudiantins et namurois ; le renforcement de l’entente et de la camaraderie au sein des Namurois, étudiants et anciens étudiants.<br/><br/>
                    <Image src={Caracole} width='100%' heigh='100%'/>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={()=>handleClose()}>
                        Close
                    </Button>
                    </Modal.Footer>
                </>
            )
            
        }
        if(item == 'pluginJava'){
            return(
                <>
                    <Modal.Header closeButton>
                    <Modal.Title>Plugin Minecraft en Java</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                        Je fais partie d'un groupe sur Facebook, "Neurchi de Minecraft" où je suis modérateur.<br/><br/>
                        Nous avions un projet avec les autres membres du staff, de faire un serveur du jeu Minecraft ou tout le monde pourrait rejoindre et s'amuser ensemble.<br/>
                        Afin de pimenter un peu le jeu, j'ai créé un plugin qui ajoute certains effets spéciaux au jeu. (changement de variable, de probabilité sur certains évenements, etc.)<br/>
                        Le plugin est écrit en Java mais la version finale n'est toujours pas terminé.<br/>
                        <a href="https://www.facebook.com/groups/621459061617934" target="_blank">Lien vers le groupe Facebook "Neurchi de Minecraft"</a><br/><br/>
                        <Image src={Minecraft} width="100%" height="100%"/>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={()=>handleClose()}>
                        Close
                    </Button>
                    </Modal.Footer>
                </>
            )
            
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const matches = width >= 1350;
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
                        <th className="portfolio-font"><b>Preuves</b></th>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="portfolio-font"><b>Animation</b></td>
                            <td>Chef Scout Salzinnes</td>
                            <td>Année 2019 - 2021</td>
                            <td>10h</td>
                            <td>+300h</td>
                            <td><Button variant="info" onClick={()=>showModal('scout')}>Détails</Button></td>
                            <td><a href="https://scoutssalzinnes.be/">https://scoutssalzinnes.be/</a><br/><br/>
                                <a href="https://tinyurl.com/scoutsalz">Facebook des scout de Salzinnes</a></td>
                            
                        </tr>
                        <tr>
                            <td className="portfolio-font"><b>Echange international</b></td>
                            <td>Semaine international</td>
                            <td>1 - 5 mars 2021</td>
                            <td>10h</td>
                            <td>30h</td>
                            <td><Button variant="info" onClick={()=>showModal('echange')}>Détails</Button></td>
                            <td><a href=".\Documents\Cedric De Dryver.pdf" target="_blank">Certificat</a></td>
                        </tr>
                        <tr>
                            <td className="portfolio-font"><b>Assistance<br/>Helpdesk</b></td>
                            <td>Assistance lors de l'évenement "Pitch Party"</td>
                            <td>16 decembre 2020<br/>préparation depuis le 10/12</td>
                            <td>10h</td>
                            <td>20h</td>
                            <td><Button variant="info" onClick={()=>showModal('pitch')}>Détails</Button></td>
                            <td><a href=".\Documents\DeDryver_Cédric.pdf" target="_blank">Certificat</a></td>
                        </tr>
                        <tr>
                            <td className="portfolio-font"><b>Formation</b></td>
                            <td>Apprentissage du néerlandais sur Duolingo</td>
                            <td>Mars 2022 - Maintenant</td>
                            <td>10h</td>
                            <td>35h</td>
                            <td><Button variant="info" onClick={()=>showModal('duolinguo')}>Détails</Button></td>
                            <td><a href="https://www.duolingo.com/profile/OinkOink__" target="_blank">duolingo.com</a><br/><br/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Apprentissage de la sécurité informatique sur Rootme</td>
                            <td>Juin 2019 - Maintenant</td>
                            <td>10h</td>
                            <td>30h</td>
                            <td><Button variant="info" onClick={()=>showModal('rootme')}>Détails</Button></td>
                            <td><a href="https://www.root-me.org/OinkOink?lang=fr#c92383c28132219fa7fe239204cf1c41" target="_blank">root-me.org</a><br/><br/></td>
                        </tr>
                        <tr>
                            <td className="portfolio-font"><b>Developpement Web</b></td>
                            <td>Mise en place et maintenance du site de la Caracole Namuroise</td>
                            <td>Année 2021 - Mainteant</td>
                            <td>10h</td>
                            <td>40h</td>
                            <td><Button variant="info" onClick={()=>showModal('caracole')}>Détails</Button></td>
                            <td><a href="https://www.caracole-namuroise.be/" target="_blank">www.caracole-namuroise.be</a><br/><br/></td>
                        </tr>
                        <tr>
                            <td className="portfolio-font"><b>Developpement</b></td>
                            <td>Développement d'un plugin Java pour serveur Minecraft</td>
                            <td>Septembre 2021 - Mainteant</td>
                            <td>10h</td>
                            <td>15h</td>
                            <td><Button variant="info" onClick={()=>showModal('pluginJava')}>Détails</Button></td>
                            <td><a href="https://github.com/DeDryverC/Plugin-Neurchi-Survie" target="_blank">Repository du code</a><br/><br/></td>
                        </tr>
                        <tr>
                            <td className="portfolio-font"><b>Conférence</b></td>
                            <td>Linux install party du Louvain-Linux</td>
                            <td>Octobre2019</td>
                            <td>0h</td>
                            <td>1h</td>
                            <td></td>
                            <td>Preuve photo perdu...</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Conférence Entreprenariat CCII</td>
                            <td>Fevrier 2022</td>
                            <td>0h</td>
                            <td>1h</td>
                            <td></td>
                            <td>Preuve photo perdu...</td>
                        </tr>
                        <tr>
                            <td className="portfolio-font"><b>Esport</b></td>
                            <td>LAN Virtuelle CSGO</td>
                            <td>10 avril 2021</td>
                            <td>0h</td>
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
                            <td>0h</td>
                            <td>30h</td>
                            <td></td>
                            <td><a href="https://www.twitch.tv/oiinkoiink" target="_blank">Twitch.tv</a><br/><br/><a href="https://www.youtube.com/channel/UC96Q3CfAA0uAqOsngmhBaKw" target="_blank">Youtube.com</a></td>
                        </tr>
                        <tr>
                            <td className="portfolio-font">Total</td>
                            <td></td>
                            <td></td>
                            <td>70h</td>
                            <td>+480h</td>
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

        <Modal show={show} onHide={handleClose} size="lg">
            {showModalData(title)}
        </Modal>
        </>
    )

}
export default Portfolio;