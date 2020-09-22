import React from 'react'; 
import {Link} from 'react-router-dom'; 
import './style.scss';
import {Navbar} from 'react-bootstrap'; 
import logo from '../../assets/images/bsblogo.png'; 


function NavBar() {

    return(
        <Navbar className="navigation"> 
            <Navbar.Brand>
                <Link to="/" className="navbar-brand logo">
                    <img src={logo} alt="logo" /> 
                </Link>
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/portfolio" className="nav-item">Portfolio</Link>
            </Navbar.Brand>
        </Navbar> 
    )
}

export default NavBar 