import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Service.css'
import { BsArrowRight } from "react-icons/bs";

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch("./service.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <Container className='py-5'>
            <Row>
                <Col className='justify-content-center' md={12}>
                    <div className="service-text text-center">
                        <h3>Our Medical Services</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae qui laborum voluptates eius modi inventore commodi ducimus. Sunt a ea ducimus expedita non dolorum! Libero sit et, accusamus voluptates tenetur minus dignissimos repellendus atque, velit quaerat quidem, omnis neque. Est assumenda possimus quasi ipsa harum explicabo. Enim doloribus id optio?</p>
                    </div>
                </Col>
            </Row>
            <Row>
                {
                    service.map(services => <Col md={4}>
                        <div className='service-info'>
                            <img src={services.img} alt="image" />
                            <h5>{services.title}</h5>
                            <p>{services.des}</p>
                            <Button className='primary'>Learn More <BsArrowRight /> </Button>
                        </div>
                    </Col>)
                }
            </Row>


        </Container>
    );
};

export default Services;