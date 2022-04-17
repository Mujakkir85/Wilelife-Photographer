import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className='m-3'>
                <Navbar.Brand href="#home" className='ms-5 ps-5 fst-italic fw-bolder'>Wilelife Photographer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto navstyle">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blogs" >Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/aboutme" >About Me</Nav.Link>
                    </Nav>

                    <Nav className='navstyle'>
                        <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
                        <Nav.Link as={Link} to="/register">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;