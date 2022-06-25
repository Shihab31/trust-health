import { Button } from 'react-bootstrap';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './Login.css'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, user } = useAuth();
    return (
        <Container>
            <Row>
                <Col md={4}>

                </Col>
                <Col md={4}>
                    <div className='text-center login-form'>
                        <h4>Pleasge Login</h4>
                        <p>{user.displayName}</p>
                        <Button onClick={signInWithGoogle}>Google Sign In</Button>
                        <Link to='/register'><p>Are You Registered?</p></Link>
                    </div>
                </Col>
                <Col md={4}>

                </Col>
            </Row>
        </Container>
    );
};

export default Login;