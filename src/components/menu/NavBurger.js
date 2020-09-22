import React from 'react';
import {Dropdown} from 'react-bootstrap'; 
import burgerIcon from './../../assets/images/burger-menu.svg'; 

function NavBurger() {

    return(
        <Dropdown id="burger-icon" className="burger-icon">
             <Dropdown.Toggle 
                id="burger-toggler" 
                className="burger-toggler"
                >
                <img src={burgerIcon} alt="" /> 
                <Dropdown.Menu>
                    <Dropdown.Item href="/">Home</Dropdown.Item>
                    <Dropdown.Item href="/portfolio">Portfolio</Dropdown.Item>
                    <Dropdown.Item href="/contact">Contact</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Toggle>
        </Dropdown>
    )
}

export default NavBurger 