import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./MainMenu.css";
import Logo from '../../assets/images/thealth.png';

const MainMenu = () => {
    return (
        <div>
            <Navbar className='nav-bg' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img style={{ width: '100px' }} src={Logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                        <Nav className='nav-menu'>
                            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="services">Services</Nav.Link>
                            <Nav.Link as={NavLink} to="doctors">Find Doctor</Nav.Link>
                            <Nav.Link as={NavLink} to="contact">Contact</Nav.Link>
                        </Nav>
                        <Nav className='nav-menu'>
                            <Nav.Link as={NavLink} to="register">Register</Nav.Link>
                            <Nav.Link as={NavLink} to="login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default MainMenu;