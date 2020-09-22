import React from 'react'; 
import './style.scss';
import homeBanner from '../../assets/images/brian-main.png';
import {Container, Row, Col} from 'react-bootstrap'; 

function Home() { 
    
    return(
        <Container className="home-container">
            <Row className="home-main"> 
                <Col xs={7} lg={8} className="home-main-content">
                    <h4 className="py-2"> 
                        let me help you build a
				        growth strategy, driven 
				        by data
                    </h4>
                    <h5 className="py-2">
                        Hi, I'm Brian Boros! i'm here to work with you
				        too build, test, and learn how we can grow our accuracy
				        with your go-to-market strategies.
                    </h5>
                </Col> 
                <Col xs={5} lg={4} className="home-main-image"> 
                    <img src={homeBanner} alt="Brian S. Boros Play Sax" /> 
                </Col> 
            </Row> 
        </Container>
    )
}

export default Home 