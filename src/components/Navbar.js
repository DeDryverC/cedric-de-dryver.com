import React, { useCallback,useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {BiMenu} from 'react-icons/bi'
import {AiOutlineMenu} from 'react-icons/ai'
import {Nav,Dropdown} from 'react-bootstrap'
import '../App.css';


function Navbar( ){
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
    return(
        <>
        <div className="navbar-custom">
            <div className="navbar-inside">
                {matches &&
                <>
                    <Link to="/" className="navbar-title">Accueil</Link>
                    <Link to="/skills" className="navbar-element">Compétences</Link>
                    <span className="navbar-logo"></span>
                    <img src="./Images/logo.png" width={120} height={90} alt="logo"/>
                    <Link to="/portfolio"className="navbar-element">Portfolio</Link>
                    <Link to="/infos" className="navbar-element">Contacts et liens</Link>
                </>}
                {!matches &&
                <>
                    <Dropdown className="AiOutmenu" drop='bottom'>
                        <Dropdown.Toggle id="dropdown-basic" variant="outline-dark">
                            <AiOutlineMenu size={35}/>
                        </Dropdown.Toggle>
                    
                        <Dropdown.Menu>
                        <Dropdown.Item ><Link to="/" className="navbar-title">Accueil</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to="/skills" className="navbar-element">Compétences</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to="/portfolio"className="navbar-element">Portfolio</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to="/infos" className="navbar-element">Contacts et liens</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <span className="navbar-logo"></span>
                    <img src="./Images/logo.png" width={120} height={90} alt="logo"/><br/>
                </>}
            </div>
        </div>
    </>
    )
}
export default Navbar;