import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { isExpired, decodeToken } from 'react-jwt';
const axios = require('axios').default;
const profile = () => {
  const myStyle = {
    backgroundColor: 'lightGray',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
  };
  const userImg = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
  };
  const imgDiv = {
    width: '150px',
    height: '150px',
    background: `linear-gradient(to bottom, #003366 0%, #0099cc 100%)`,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  };

  const titleStyle = {
    backgroundColor: '#0d6efd',
    color: 'white',
    textAlign: 'center',
  };

  const token = localStorage.getItem('mytoken');

  const myDecodedToken = decodeToken(token);
  const isMyTokenExpired = isExpired(token);

  //console.log(myDecodedToken.username);
  const tokenUsername = myDecodedToken.username;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [createdAt, setcreatedAt] = useState('');
  const [updatedAt, setupdatedAt] = useState('');

  axios
    .get('http://localhost:3001/api/v1/users/' + tokenUsername)
    .then(function (response) {
      setFullname(response.data.name);
      setUsername(response.data.username);
      setEmail(response.data.email);
      setcreatedAt(response.data.createdAt);
      setupdatedAt(response.data.updatedAt);
      //console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  const handleSubmit = () => {
    console.log('blog published');
  };

  return (
    <>
      <div style={myStyle}>
        {token && myDecodedToken && isMyTokenExpired == false ? (
          <Card style={{ width: '35rem' }}>
            <Card.Body>
              <div style={userImg}>
                <div style={imgDiv}>
                  <h1>SR</h1>
                </div>
              </div>
              <h4>Full Name: {fullname}</h4>
              <p>Username : {username}</p>
              <p>Email: {email}</p>
              <p>Profile Created At: {createdAt}</p>
              <p>Profile Updated At: {updatedAt}</p>
            </Card.Body>
            <Card.Footer>
              <Button variant="outline-primary">Update</Button>{' '}
              <Button variant="outline-primary" onClick={handleShow}>
                Create Posts
              </Button>{' '}
              <Button style={{ float: 'right' }} variant="outline-danger">
                Delete
              </Button>{' '}
            </Card.Footer>
          </Card>
        ) : (
          <Card style={{ width: '40rem' }}>
            <Card.Body>
              <h1>You Have Not Logged!</h1>
            </Card.Body>
          </Card>
        )}
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
                    autoFocus
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} required />
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
    </>
  );
};

export default profile;
