import React from 'react';
import PortfolioMain from './PortfolioMain'; 
import PortfolioWork from './PortfolioWork'; 
import PortfolioFoot from './PortfolioFoot'; 
import './style.scss'; 

function Portfolio() {

    return(
        <section> 
            <PortfolioMain /> 
            <PortfolioWork /> 
            <PortfolioFoot /> 
        </section>
    )
}

export default Portfolio 