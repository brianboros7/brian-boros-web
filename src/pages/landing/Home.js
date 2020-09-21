import React from 'react'; 
import './style.scss';
import homeBanner from '../../assets/images/brian-main.png';

function Home() { 
    
    return(
        <section className="home">
            <div className="home-main"> 
                <div className="home-main-banner d-flex"> 
                    <div className="main-banner-content">
                        <h4> 
                            let me help you build a
				            growth strategy, driven 
				            by data
                        </h4>
                        <h5>
                            Hi, I'm Brian Boros! i'm here to work with you
				            too build, test, and learn how we can grow our accuracy
				            with your go-to-market strategies.
                        </h5>
                    </div> 
                    <div className="main-banner-image"> 
                        <img src={homeBanner} alt="Brian S. Boros Play Sax" /> 
                    </div> 
                </div>
            </div> 
        </section>
    )
}

export default Home 