import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap'; 
import borosPaintImage from '../../../assets/images/boros-painting-header-banner.png'; 
import scrimbaWork from '../../../assets/images/scrimba-work.png'; 
import webDev from '../../../assets/images/spa-from-scratch.png'; 
import spaFromScratch from '../../../assets/images/web-dev.png'; 
// import {LinkContainer} from 'react-router-bootstrap'; 

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
                                <a href="http://borospainting.com" className="portfolio-work-link" alt="Link to BorosPainting.com">Click to View Site</a>
                                <a  href="https://github.com/brianboros7/boros-painting-web" className="portfolio-work-link" alt="Link to Boros Painting Github">Click to Github</a>
                            </Card.Body> 
                        </Card>
                    </Col> 

                    <Col xs={12} lg={6} className="portfolio-work-cards"> 
                        <Card>
                            <Card.Img src={scrimbaWork} alt="" /> 
                            <Card.Body>
                                <Card.Title>
                                    Scrimba: The Frontend Developers Career Path!
                                </Card.Title>
                                <Card.Text>
                                    This is a Single Page App (SPA) from scratch, only using HTML, CSS, and Javascript. 
                                    This app and website is the Scrimba Frontend Developers Career Path learning modules, deployed on Netlify, 
                                    and also has links, featuring React specific projects and showcasing the Frontendend Developers career path capstone project. 
                                </Card.Text>
                                <a href="https://clever-raman-2221ee.netlify.app" className="portfolio-work-link" alt="Link to work on Scrimba The Frontend developers Career path">Click to View Site</a>
                                <a href="https://github.com/brianboros7/frontend-career-path" className="portfolio-work-link" alt="Link to work on Github">Click to Github</a>
                            </Card.Body> 
                        </Card>
                    </Col> 
                    
                    <Col xs={12} lg={6} className="portfolio-work-cards"> 
                        <Card>
                            <Card.Img  src={webDev}  alt="" /> 
                            <Card.Body>
                                <Card.Title>
                                    Scrimba: The React Bootcamp 
                                </Card.Title>
                                <Card.Text>
                                    This is a React application built from Bob's React Bootcamp course on Scrimba.com, using TalwindCss, and incorporates the use
                                    of API's, and all React libraries such as hooks and icons.
                                </Card.Text>
                                <a href="https://quizzical-montalcini-6d000a.netlify.app/" className="portfolio-work-link" alt="The rEact Bootcamp on Scrimba">Click to View Site</a>
                                <a href="https://github.com/brianboros7/React-Example-Blog" className="portfolio-work-link" alt="The work on Github">Click to Github</a>
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
                                <a href="https://github.com/brianboros7/React-Example-Blog" className="portfolio-work-link" alt="Link to Single-page App (SPA) from scratch">Click to View Site</a>
                                <a href="https://github.com/brianboros7/React-Example-Blog" className="portfolio-work-link" alt="Link to work on Github">Click to Github</a>
                            </Card.Body> 
                        </Card>
                    </Col>
                </Row>        
            </Container>
        </section>
    )
}

export default DevWork 