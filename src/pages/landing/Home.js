import React from 'react'; 
import './style.scss';
import homeBanner from '../../assets/images/bsb-headerbanner.png';

function Home() { 
    
    return(
        <section className="home">
            <div className="home-main"> 

                <div className="home-main-banner" style={{ backgroundImage:`url(${homeBanner})`}} alt="Brian S. Boros in a suit playing Saxophone" > 
                    <div className="hb-content">
                        <h4> 
                            let me help you build a
				            growth strategy, driven 
				            by data
                        </h4>
                        <h5>
                            Hi, I'm Brian Boros! i'm here to work with you
				            too build, test, and learn how we can grow accuratacy
				            with your go-to-market strategies.
                        </h5>
                    </div> 
                </div>
            </div> 
        </section>
    )
}

export default Home 