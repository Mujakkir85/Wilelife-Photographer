import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container className='m-3'>
                <Navbar.Brand style={{ color: '#04AA6D' }} className='ms-5 ps-5 fst-italic fw-bolder'>Wilelife Photographer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto navstyle">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/blogs" >Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/aboutme" >About Me</Nav.Link>
                    </Nav>

                    <Nav className='navstyle'>
                        {
                            user ? <Nav.Link onClick={logout} as={Link} to="/login">Logout</Nav.Link>
                                :
                                <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;