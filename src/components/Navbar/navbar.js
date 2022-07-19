import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { isExpired, decodeToken } from 'react-jwt';
import Cookies from 'js-cookie';

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

  const mycookie = Cookies.get('macaron');

  const myDecodedToken = decodeToken(mycookie);
  const isMyTokenExpired = isExpired(mycookie);
  //console.log(myDecodedToken.username);
  //const tokenUsername = myDecodedToken.username;

  return (
    <div>
      {['md'].map((expand) => (
        <Navbar key={expand} style={navBarStyle} expand={expand}>
          <Container>
            <Navbar.Brand href="/" style={itemColor}>
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
                  {mycookie && myDecodedToken && isMyTokenExpired === false && (
                    <Nav.Link href="/profile" style={itemColor}>
                      {myDecodedToken.username}
                    </Nav.Link>
                  )}
                  {mycookie && myDecodedToken && isMyTokenExpired === false ? (
                    <Nav.Link href="/signout" style={itemColor}>
                      Sign Out
                    </Nav.Link>
                  ) : (
                    <Nav.Link href="/signin" style={itemColor}>
                      Sign In
                    </Nav.Link>
                  )}
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
