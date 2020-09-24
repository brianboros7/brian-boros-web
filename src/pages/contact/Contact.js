import React from 'react'; 
import './style.scss'; 
import {Form, Col} from 'react-bootstrap'; 

function Contact() {
    return(
        <section className="contact-container">
            <div className="contact-main">
                <div class="contact-content">         
                    <h5 class="border">
                        Thank you for stopping by to say hello! I thoroughly enjoy hearing from each and every one of you !!
                    </h5>
                </div> 
                <div className="contact-form-container border rounded">
                    <Form className="contact-form">
                        <Form.Row>
                            <Form.Group as={Col} xs={6} className="contact-form-data">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="First name" />
                            </Form.Group>
                            <Form.Group as={Col} xs={6}  className="contact-form-data">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Last name" />
                            </Form.Group>
                            <Form.Group as={Col} xs={12} lg={12} className="contact-form-data"> 
                                <Form.Label>
                                    Email
                                </Form.Label>
                                <Form.Control placeholder="email" /> 
                            </Form.Group> 
                            <Form.Group as={Col}>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default Contact 