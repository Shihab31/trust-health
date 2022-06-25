import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <Container>
            <div className='main-contact'>
                <Row className='contact'>
                    <Col md={6}>
                        <div className='contact-left'>
                            <h6>Need Emergency advice from our doctor?</h6>
                            <h3>Request a call Back Today Now!</h3>
                            <p>We will make a single attempt to contact you from a with held number, usually within24 hoursof your request </p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <form action="">
                            <p><input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" /></p>

                            <p>
                                <input type="text" className="form-control" placeholder="Mobile Number" />
                            </p>
                            <p>
                                <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Select Your State..."></input>
                            </p>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">Dhaka</option>
                                <option value="2">Rajshahi</option>
                                <option value="3">Bogura</option>
                            </select>

                        </form>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Contact;