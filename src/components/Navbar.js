import React, { useCallback } from 'react';
import {Nav,} from 'react-bootstrap'
import '../App.css';


function Navbar( ){
    return(
        <div className="navbar-custom">
            <div className="navbar-inside">
                <a href="" className="navbar-title">Acceuil</a>
                <a className="navbar-element">Compétences</a>
                <a className="navbar-logo"><b>cdd</b></a>
                <a className="navbar-element">Portfolio</a>
                <a className="navbar-element">Contacts et liens</a>
            </div>
        </div>
    )
}
export default Navbar;