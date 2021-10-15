import React from "react";
import {
  Container,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from "react-bootstrap";

class MenuBar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Tic Tac Toe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Game</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="Settings" id="basic-nav-dropdown">
                <NavDropdown.Item href="#1">Color</NavDropdown.Item>
                <NavDropdown.Item href="#2">Symbols</NavDropdown.Item>
                <NavDropdown.Item href="#3">History</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#4">Clear</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MenuBar;
