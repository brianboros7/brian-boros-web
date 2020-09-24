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
                        <Nav.Item>Home</Nav.Item>
                    </LinkContainer>
                    <LinkContainer to="/portfolio"> 
                        <Nav.Item>Portfolio</Nav.Item>
                    </LinkContainer>
                    <LinkContainer to="/contact"> 
                        <Nav.Item>Contact</Nav.Item>
                    </LinkContainer>
                </Dropdown.Menu>
            </Dropdown.Toggle>
        </Dropdown>
    )
}

export default NavBurger 