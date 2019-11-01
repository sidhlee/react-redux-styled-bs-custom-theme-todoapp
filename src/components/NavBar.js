import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.svg';


const NavBar = () => (
    <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <img 
                    src={logo} 
                    width="30" 
                    height="30" 
                    className="d-inline-block align-top" 
                    alt="logo" />
                {' '}Todo App
          </Navbar.Brand>
        </Navbar>
    </>
);

export default NavBar;

