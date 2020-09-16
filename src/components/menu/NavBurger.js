import React from 'react';
import {Link} from 'react-router-dom'; 
import {Dropdown} from 'react-bootstrap'; 
import burgerIcon from './../../assets/images/burger-menu.svg'; 

function NavBurger() {

    return(
        <Dropdown id="burger-icon" className="burger-icon" show>
             <Dropdown.Toggle id="burger-toggler" className="burger-toggler">
                <img src={burgerIcon} alt="" /> 
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Link to="/">Home</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link to="/contact">Contact</Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Toggle>
        </Dropdown>
    )
}

export default NavBurger 