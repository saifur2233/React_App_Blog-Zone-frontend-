import React, { useState, useEffect } from 'react';
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

  const [userData, setUserData] = useState('');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const getUserData = async () => {
    axios
      .get('http://localhost:3001/api/v1/users/' + tokenUsername)
      .then(function (response) {
        setUserData(response.data);
        //console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      tokenUsername,
      description,
    };
    await axios
      .post('http://localhost:3001/api/v1/posts', data)
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        // setError(error.message);
        console.log(error);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    handleSubmit();
  }, []);

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
              <h4>Full Name: {userData.name}</h4>
              <p>Username : {userData.username}</p>
              <p>Email: {userData.email}</p>
              <p>Profile Created At: {userData.createdAt}</p>
              <p>Profile Updated At: {userData.updatedAt}</p>
            </Card.Body>
            <Card.Footer>
              <Button variant="outline-primary">Update</Button>{' '}
              <Button variant="outline-warning" onClick={handleShow}>
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
    </>
  );
};

export default profile;
