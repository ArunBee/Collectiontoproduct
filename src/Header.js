import React from "react";
// import { Container, Navbar, Nav, NavDropdown } from "reacreact-bootstrap";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'


export default function Header() {
  return ( 
 <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/collection">Collection</Nav.Link>
        <Nav.Link href="/dashoard">Dashboard</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#">Action</NavDropdown.Item>
          <NavDropdown.Item href="#">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    <div className="icons">
      <i className="fa fa-search"></i>
      <i className="fa fa-shopping-cart"></i>
    </div>
  </Container>
</Navbar> 

    )
}