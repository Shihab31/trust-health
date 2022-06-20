import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import bannerImage from '../../../assets/images/female_docotor.png';
import './Hero.css';

const Hero = () => {
    return (
        <Container>
            <Row className='d-flex align-items-center'>
                <Col md={8}>
                    <div className='banner-text'>
                        <h3>A family of hospitals <br /> for your family</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur non voluptatibus voluptates iusto esse! Dolores, veniam! Tempora obcaecati, animi eaque veniam magnam repellat beatae esse. Odio non perferendis id quae.
                        </p>
                        <Button className='mt-3 mx-1'>Get Appoinment</Button>
                        <Button className='mt-3'>Specialists</Button>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='banner-img'>
                        <img src={bannerImage} alt="banner-image" />
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default Hero;