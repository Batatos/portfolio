import React, {Component} from "react";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import {Link, animateScroll as scroll} from 'react-scroll';


class NavBar extends Component{
    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Link
            activeClass="active"
            to="section1-content"
            spy={true}
            smooth={true}
            offset={-50}
            duration= {500}
            >
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                
              </Nav>
              <Nav>
              <Link
                activeClass="active"
                to="section1-content"
                spy={true}
                smooth={true}
                offset={-50}
                duration= {500}
                >
                <Nav.Link href="#features">About</Nav.Link>
              </Link>
              <Link
                activeClass="active"
                to="section2-content"
                spy={true}
                smooth={true}
                offset={-50}
                duration= {500}
                >
                <Nav.Link href="#features">Side Projects</Nav.Link>
                </Link>
                <Link
                activeClass="active"
                to="section3-content"
                spy={true}
                smooth={true}
                offset={-50}
                duration= {500}
                >
                <Nav.Link href="#pricing">Blog</Nav.Link>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default NavBar;