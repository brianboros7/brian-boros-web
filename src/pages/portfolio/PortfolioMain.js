import React from 'react';
import portfolioMainImage from '../../assets/images/bsb-hireme.png';
import {Container, Row} from 'react-bootstrap'; 
import './style.scss'; 

function PortfolioMain() {

    return(
        <Container fluid className="portfolio-main"> 
            <Row  className="portfolio-header-content"> 
                <div className="portfolio-main-image"> 
                    <img src={portfolioMainImage} alt="" />
                </div> 
                <section className="portfolio-main-content-container"> 
                    <h2 className="p-2">Or.... just my next gig !</h2>
                     
                    <div className="p-3 portfolio-main-content"> 
                        <div> 
                            <h4 className="p-2 bg-info">
                                Here you'll find links to my work. Enjoy~
                            </h4>
                        </div> 
                    </div> 
                </section>
            </Row>
        </Container>
    )
}

export default PortfolioMain