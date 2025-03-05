import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  ABOUT_ROUTE,
  BASE_ROUTE,
  PRODUCTS_ROUTE,
  SERVICES_ROUTE,
  SIGNIN_ROUTE,
} from "../constants/AppRoutes";
import "./Navigation.css";

export function Navigation() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">AURA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to={BASE_ROUTE}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to={ABOUT_ROUTE}>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>

            <LinkContainer to={SERVICES_ROUTE}>
              <Nav.Link>Services</Nav.Link>
            </LinkContainer>

            <LinkContainer to={PRODUCTS_ROUTE}>
              <Nav.Link>Products</Nav.Link>
            </LinkContainer>

            <LinkContainer to={SIGNIN_ROUTE}>
              <Nav.Link>Sign In</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
