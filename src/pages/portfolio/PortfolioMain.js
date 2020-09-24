import React from 'react';
import portfolioMainImage from '../../assets/images/bsb-hireme.png';
import './style.scss'; 

function PortfolioMain() {

    return(
        <section fluid className="portfolio-main"> 
            <div  className="portfolio-header-content"> 
                <div className="portfolio-main-image"> 
                    <img src={portfolioMainImage} alt="" />
                </div> 
                <div className="portfolio-main-content-container"> 
                    <h2 className="p-2">Or.... just my next gig !</h2>
                     
                    <div className="portfolio-main-content"> 
                        <h4 className="p-2 bg-info">
                            Here you'll find links to my work that I'll conssitently be
                            updating on a weekly basis. Even this site that you're clicking around on I built with React.JS, 
                            from the ground up. Let me know what you think. 
                        </h4> 
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default PortfolioMain