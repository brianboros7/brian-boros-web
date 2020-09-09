import React from 'react';
import {Link} from 'react-router-dom'; 
import burgerIcon from './../../assets/images/burger-menu.svg'; 

function NavBurger() {

    return(
        <div className="btn-group-vertical dropup"> 
            <button className="btn dropdown-toggle burger-btn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                <img src={burgerIcon} alt="" /> 
            </button>  
            <div className="dropdown-menu">
                <Link to="/" className="dropdown-item">Home</Link>
                <Link to="/contact" className="dropdown-item">Contact</Link>
            </div> 
        </div> 
    )
}

export default NavBurger 