import React from 'react'
import logo100 from '../images/logo100.png'
import { Navbar, Nav } from 'react-bootstrap'
import Auth from '../utils/auth'

function Navigation() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
      <>
        <Nav.Link href="/scorecard">Scorecard</Nav.Link>
        <Nav.Link href="/merch">Merch</Nav.Link>
        <Nav.Link href="/" onClick={() => Auth.logout()}>Logout</Nav.Link>
      </>
      );
    } else {
      return (
        <>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
      </>
      );
    }
  }

  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"><img src={logo100} alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
              <Nav>
                {showNavigation()}
              </Nav>
            </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;