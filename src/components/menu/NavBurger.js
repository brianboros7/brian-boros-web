import React from 'react';
import {Dropdown, Nav} from 'react-bootstrap'; 
import burgerIcon from './../../assets/images/burger-menu.svg'; 
import {LinkContainer} from 'react-router-bootstrap'; 
function NavBurger() {

    return(
        <Dropdown id="burger-icon" className="burger-icon">
             <Dropdown.Toggle 
                id="burger-toggler" 
                className="burger-toggler"
                >
                <img src={burgerIcon} alt="" /> 
                <Dropdown.Menu>
                    <LinkContainer to="/"> 
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/portfolio"> 
                        <Nav.Link>Portfolio</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact"> 
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                </Dropdown.Menu>
            </Dropdown.Toggle>
        </Dropdown>
    )
}

export default NavBurger 