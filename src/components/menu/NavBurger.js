import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'; 
import burgerIcon from './../../assets/images/burger-menu.svg'; 

function NavBurger() {

    return(
        <Navbar expand="lg"> 
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <img src={burgerIcon} alt="" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr.auto">
                    <NavDropdown title="dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <Nav.Link to="/">Home</Nav.Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Nav.Link to="/contact">Contact</Nav.Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav> 
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBurger 