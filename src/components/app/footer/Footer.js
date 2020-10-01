import React from 'react' 
import NavBurger from '../../menu/NavBurger'; 
import './style.scss';  

import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer()  {

    return(
        <footer>             
            <NavBurger />
            <p><CopyrightIcon /> All Rights Reserved. Brian Boros Company, LLC.</p> 
        </footer>
    )
}

export default Footer 