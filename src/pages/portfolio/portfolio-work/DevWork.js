import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap'; 
import borosPaintImage from '../../../assets/images/boros-painting-header-banner.png'; 
import spaFromScratch from '../../../assets/images/spa-from-scratch.png'; 
import reactDev from '../../../assets/images/react-dev.png'; 
// import {LinkContainer} from 'react-router-bootstrap'; 

function DevWork() {

    return(
        <section className="portfolio-work-container">
            <Container className="portfolio-work-main border"> 
                <Row className="portfolio-work-content"> 
                    <Col xs={12} lg={6} className="portfolio-work-cards"> 
                        <Card>
                            <Card.Img  src={reactDev}  alt="" /> 
                            <Card.Body>
                                <Card.Title>
                                    A React Example Blog 
                                </Card.Title>
                                <Card.Text>
                                    This is a React application built from with concepts I've learned from different 
                                    tutorials from Linkedin Learning, Scrimba's React Bootcamp course with Bob and the Frontend Develoeprs Career Path's capstone Netflix Clone project.  
                                    This app is using TalwindCss, and incorporates the use
                                    of API's, and React libraries such as hooks and icons.
                                </Card.Text>
                                <a href="https://keen-hypatia-b3fc4a.netlify.app/" className="portfolio-work-link" alt="The rEact Bootcamp on Scrimba">Click to View Site</a>
                                <a href="https://github.com/brianboros7/React-Example-Blog" className="portfolio-work-link" alt="The work on Github">Click to Github</a>
                            </Card.Body> 
                        </Card>
                    </Col>
                    
                    <Col xs={12} lg={6} className="portfolio-work-cards"> 
                        <Card>
                            <Card.Img src={spaFromScratch} alt="" /> 
                            <Card.Body>
                                <Card.Title>
                                    Single-page App (SPA) from Scratch 
                                </Card.Title>
                                <Card.Text>
                                    This is a Single Page App (SPA) from scratch, only using HTML, CSS, and Vanilla JavaScript. 
                                    This website incorporates Vanilla concepts I've learned from many tutorials,
                                    and projects from Scrimba's Frontend Developers Career Path learning modules, deployed on Netlify, 
                                    and also has links, featuring other apps I'm building from scratch. 
                                </Card.Text>
                                <a href="https://clever-clarke-1b2e50.netlify.app/" className="portfolio-work-link" alt="Link to work on Scrimba The Frontend developers Career path">Click to View Site</a>
                                <a href="https://github.com/brianboros7/frontend-career-path" className="portfolio-work-link" alt="Link to work on Github">Click to Github</a>
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
                                <a href="https://keen-hypatia-b3fc4a.netlify.app" className="portfolio-work-link" alt="Link to Single-page App (SPA) from scratch">Click to View Site</a>
                                <a href="https://github.com/brianboros7/React-Example-Blog" className="portfolio-work-link" alt="Link to work on Github">Click to Github</a>
                            </Card.Body> 
                        </Card>
                    </Col>

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
                </Row>        
            </Container>
        </section>
    )
}

export default DevWork 