import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './MyNavbar.css';

export default function MyNavbar() {
  return (
    <Navbar id='navbar' expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand id='brand' href="#">Pastries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="my-navbar">
            <Nav.Link className='nav-items' href="#about">About</Nav.Link>
            <Nav.Link className='nav-items' href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link className='nav-items' href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}