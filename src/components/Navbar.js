import React, {Component} from "react";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import {Link, animateScroll as scroll} from 'react-scroll';


class NavBar extends Component{
    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Link
            activeClass="active"
            to="section1"
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
                <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-50}
                duration= {500}
                >
                <Nav.Link href="#features">Side Projects</Nav.Link>
                </Link>
                <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-50}
                duration= {500}
                >
                <Nav.Link href="#pricing">Blog</Nav.Link>
                </Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default NavBar;