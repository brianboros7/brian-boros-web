import React from 'react';
import {Container, Row, Col, Card, Nav} from 'react-bootstrap'; 
import borosPaintImage from '../../../assets/images/boros-painting-header-banner.png'; 
import scrimbaWork from '../../../assets/images/scrimba-work.png'; 
import spaFromScratch from '../../../assets/images/spa-from-scratch.png'; 
import webDev from '../../../assets/images/web-dev.png'; 


function DevWork() {

    return(
        <section className="portfolio-work-container">
            <Container className="portfolio-work-main border"> 
                <Row className="portfolio-work-content"> 
                    <Col xs={12} lg={6} className="portfolio-work-cards"> 
                        <Card>
                            <Card.Img  src={borosPaintImage}  alt="" /> 
                            <Card.Body>
                                <Card.Title>
                                    Boros Painting Web
                                </Card.Title>
                                <Card.Text>
                                    This is a site I've built for my fathers paitning company.
                                    It's built with React.JS, uses Bootstrap, and is responsive from mobile on up.
                                </Card.Text>
                                <Nav.Item href="https://pensive-hypatia-7fafb7.netlify.app/" className="portfolio-work-link">Click to View Site</Nav.Item>
                                <Nav.Item href="https://github.com/brianboros7/boros-painting-web" className="portfolio-work-link">Click to Github</Nav.Item>
                            </Card.Body> 
                        </Card>
                    </Col> 
                    <Col xs={12} lg={6} className="portfolio-work-cards"> 
                        <Card>
                            <Card.Img src={scrimbaWork} alt="" /> 
                            <Card.Body>
                                <Card.Title>
                                    Scrimba: The Frontend Developers Creer Path!
                                </Card.Title>
                                <Card.Text>
                                    This is a website built from scratch uisng HTML, CSS, JavaScript, 
                                    and specific React technologies from what I learned from the 
                                    Scrimba course the frontend developers career path.  
                                </Card.Text>
                                <Nav.Item href="" className="portfolio-work-link">Click to View Site</Nav.Item>
                                <Nav.Item href="https://github.com/brianboros7/frontend-career-path" className="portfolio-work-link">Click to Github</Nav.Item>
                            </Card.Body> 
                        </Card>
                    </Col> 
                    <Col xs={12} lg={6} className="portfolio-work-cards"> 
                        <Card>
                            <Card.Img  src={webDev}  alt="" /> 
                            <Card.Body>
                                <Card.Title>
                                    The React Bootcamp
                                </Card.Title>
                                <Card.Text>
                                    This is a site I've built from Bob's React Bootcamp course using TalwindCss, and incorporates the use
                                    of API's, and all React libraries such as hooks and icons.
                                </Card.Text>
                                <Nav.Item href="" className="portfolio-work-link">Click to View Site</Nav.Item>
                                <Nav.Item href="" className="portfolio-work-link">Click to Github</Nav.Item>
                            </Card.Body> 
                        </Card>
                    </Col>
                    <Col xs={12} lg={6} className="portfolio-work-cards"> 
                        <Card>
                            <Card.Img  src={spaFromScratch}  alt="" /> 
                            <Card.Body>
                                <Card.Title>
                                    Single-page App (SPA) From Scratch!
                                </Card.Title>
                                <Card.Text>
                                    This is another example site I decided to code using only Vanilla JavaScript,
                                    HTML, and CSS. It showcases my understanding of the most basic use of the building 
                                    blocks of the web. 
                                </Card.Text>
                                <Nav.Item href="" className="portfolio-work-link">Click to View Site</Nav.Item>
                                <Nav.Item href="" className="portfolio-work-link">Click to Github</Nav.Item>
                            </Card.Body> 
                        </Card>
                    </Col>
                </Row>        
            </Container>
        </section>
    )
}

export default DevWork 