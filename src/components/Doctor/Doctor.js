import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Doctor.css';
import doctorImg from '../../assets/images/male_doctor.png'
import { FcPlus } from "react-icons/fc";


const Doctor = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <div className='doctor-img'>
                        <img src={doctorImg} alt="" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className='doctor-title'>
                        <h3>What Makes <span style={{ color: 'blue' }}>trustCare</span> Health <br /> Services Unique!</h3>
                    </div>
                    <div className='d-flex flex-row'>
                        <div className='icon-size mx-1'>
                            <FcPlus />

                        </div>
                        <div className='doctor-info'>
                            <h4>Our Experience</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto, suscipit sunt quos perspiciatis cum </p>
                        </div>
                    </div>
                    <div className='d-flex flex-row'>
                        <div className='icon-size mx-1'>
                            <FcPlus />

                        </div>
                        <div className='doctor-info'>
                            <h4>Our Experience</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto, suscipit sunt quos perspiciatis cum </p>
                        </div>
                    </div>
                    <div className='d-flex flex-row'>
                        <div className='icon-size mx-1'>
                            <FcPlus />

                        </div>
                        <div className='doctor-info'>
                            <h4>Our Experience</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto, suscipit sunt quos perspiciatis cum </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Doctor;