import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import myusername from '../Authentication/decodeUsername';
const navbar = () => {
  const navBarStyle = {
    background: `linear-gradient(to bottom, #003366 0%, #0099cc 100%)`,
    color: 'white',
  };
  const searchButtonStyle = {
    color: 'white',
    backgroundColor: '#003366',
  };
  const itemColor = { color: 'white' };
  const token = localStorage.getItem('mytoken');
  const name = myusername();
  return (
    <div>
      {['md'].map((expand) => (
        <Navbar key={expand} style={navBarStyle} expand={expand}>
          <Container>
            <Navbar.Brand href="#" style={itemColor}>
              <b>Blog Zone</b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button style={searchButtonStyle}>Search</Button>
                  </Form>
                  <Nav.Link
                    href="/"
                    style={{ marginLeft: '5rem', color: 'white' }}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link href="/blogs" style={itemColor}>
                    Blogs
                  </Nav.Link>
                  <Nav.Link href="/about" style={itemColor}>
                    About Us
                  </Nav.Link>
                  <Nav.Link href="/contact" style={itemColor}>
                    Contact
                  </Nav.Link>
                  {token && (
                    <Nav.Link href="/profile" style={itemColor}>
                      {name}
                    </Nav.Link>
                  )}
                  {token ? (
                    <Nav.Link href="/signout" style={itemColor}>
                      Sign Out
                    </Nav.Link>
                  ) : (
                    <Nav.Link href="/signin" style={itemColor}>
                      Sign In
                    </Nav.Link>
                  )}
                  {/* <Nav.Link href="/signin" style={itemColor}>
                    Sign In
                  </Nav.Link>
                  <Nav.Link href="/signup" style={itemColor}>
                    Sign Up
                  </Nav.Link> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default navbar;
