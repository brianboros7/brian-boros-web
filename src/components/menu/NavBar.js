import React from 'react'; 
import {Link} from 'react-router-dom'; 
import './style.scss'
import logo from '../../assets/images/bsblogo.png'; 


function NavBar() {
    const logoImage = [{id: "1", src: logo, alt: "Brian S. Boros Logo"}]

    return(
        <nav className="navbar"> 
            <nav className="navigation">
                <Link to="/" className="navbar-brand logo">
                    {logoImage.map((logo) => (
                        <img key={logo.id} src={logo.src} alt={logo.alt} /> 
                    ))}
                </Link>
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/contact" className="nav-item">Contact</Link>
            </nav>
        </nav> 
    )
}

export default NavBar 