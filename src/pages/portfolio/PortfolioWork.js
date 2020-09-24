import React from 'react'; 
import { Card, Nav } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap'; 
import borosPaintImage from '../../assets/images/boros-painting-header-banner.png'; 

function PortfolioWork() {

    return(
        <section className="portfolio-work-container">
            <Container className="portfolio-work-main border"> 
                <Row className="portfolio-work-content"> 
                    <Col xs={12} lg={6} className="portfolio-work-cards"> 
                        <Card>
                            <Card.Img  src={borosPaintImage}  alt="" /> 
                            <Card.Body>
                                <Card.Title>
                                    Boros Paiting Web
                                </Card.Title>
                                <Card.Text>
                                    This is a site I've built for my fathers paitning company.
                                    It's built with React.JS, uses Bootstrap, and is responsive from mobile on up.
                                </Card.Text>
                                <Nav.Item href="" className="portfolio-work-link">Click to View Site</Nav.Item>
                                <Nav.Item href="" className="portfolio-work-link">Click to Github</Nav.Item>
                            </Card.Body> 
                        </Card>
                    </Col> 
                    <Col xs={12} lg={6} className="portfolio-work-cards"> 
                        <Card>
                            <Card.Img src={borosPaintImage} alt="" /> 
                            <Card.Body>
                                <Card.Title>
                                    Example React Blog
                                </Card.Title>
                                <Card.Text>
                                    This is an example react blog, 
                                    that uses TailwindCSS instead of Bootstrap, 
                                    and shares skills I've learned about the React framework.  
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

export default PortfolioWork 