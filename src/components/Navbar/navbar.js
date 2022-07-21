import React, { useState } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
const axios = require('axios').default;
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
  const titleStyle = {
    backgroundColor: '#0d6efd',
    color: 'white',
    textAlign: 'center',
  };

  const itemColor = { color: 'white' };

  const mycookie = Cookies.get('macaron');

  const myDecodedToken = decodeToken(mycookie);
  const isMyTokenExpired = isExpired(mycookie);
  //console.log(myDecodedToken.username);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios({
      method: 'post',
      url: 'http://localhost:3001/api/v1/posts',
      data: {
        title: title,
        username: myDecodedToken.username,
        description: description,
      },
      headers: {
        Authorization: 'Bearer ' + mycookie,
      },
    })
      .then(function (response) {
        alert('Successfully blog created');
        const blogid = response.data.id;
        window.location.href(`/viewblog/${blogid}`);
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

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
                  {mycookie &&
                    myDecodedToken.username &&
                    isMyTokenExpired === false && (
                      <Nav.Link onClick={handleShow} style={itemColor}>
                        Create Blog
                      </Nav.Link>
                    )}
                  <Nav.Link href="/about" style={itemColor}>
                    About Us
                  </Nav.Link>
                  {/* <Nav.Link href="/contact" style={itemColor}>
                    Contact
                  </Nav.Link> */}

                  {mycookie &&
                    myDecodedToken.username &&
                    isMyTokenExpired === false && (
                      <Nav.Link href="/profile" style={itemColor}>
                        {myDecodedToken.username}
                      </Nav.Link>
                    )}
                  {mycookie &&
                  myDecodedToken.username &&
                  isMyTokenExpired === false ? (
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
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton style={titleStyle}>
            <Modal.Title>Publish Your Blog</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Blog Title"
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  autoFocus
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  rows={3}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default navbar;
