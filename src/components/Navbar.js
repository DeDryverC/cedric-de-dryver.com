import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import {Nav,} from 'react-bootstrap'
import '../App.css';


function Navbar( ){
    return(
        <div className="navbar-custom">
            <div className="navbar-inside">
                <Link to="/" className="navbar-title">Acceuil</Link>
                <Link to="/Skills" className="navbar-element">Compétences</Link>
                <Link to="/" className="navbar-logo"><b>cdd</b></Link>
                <Link to="/Portfolio"className="navbar-element">Portfolio</Link>
                <Link to="/Informations" className="navbar-element">Contacts et liens</Link>
            </div>
        </div>
    )
}
export default Navbar;