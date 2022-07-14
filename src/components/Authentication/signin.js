import React, { useRef, useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import background from '../../assets/images/login/login3.jpg';
const axios = require('axios').default;

const signin = () => {
  const myStyle = {
    backgroundImage: `url(${background})`,
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
  };
  const titleStyle = {
    backgroundColor: '#0d6efd',
    color: 'white',
    textAlign: 'center',
  };
  const footerStyle = {
    textAlign: 'center',
    color: '#999999',
  };

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(user, pwd);
    const data = {
      username: user,
      password: pwd,
    };
    await axios
      .post('http://localhost:3001/api/v1/signin/', data)
      .then((response) => {
        //console.log(response);
        const accessToken = response?.data?.accessToken;
        setUser('');
        setPwd('');
        setSuccess(true);
      })
      .catch((error) => {
        if (!error?.response) {
          setErrMsg('No Server Response');
        } else if (error.response?.status === 400) {
          setErrMsg('Missing Username or Password');
        } else if (error.response?.status === 401) {
          setErrMsg('Unauthorized Access');
        } else {
          setErrMsg('Login Failed');
        }
        errRef.current.focus();
      });
    setUser('');
    setPwd('');
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You ase Logged in!</h1>
          <br />
          <p>
            <a href="">Go to Home</a>
          </p>
        </section>
      ) : (
        <div style={myStyle}>
          <Card style={{ width: '30rem' }}>
            <Card.Header style={titleStyle}>
              <h4>Sign In</h4>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="outline-info" size="md" type="submit">
                    Submit
                  </Button>{' '}
                </div>
              </Form>
            </Card.Body>
            <Card.Footer style={footerStyle}>
              <p>
                Don't have a account?
                <Card.Link href="/signup"> Sign Up</Card.Link>
              </p>
            </Card.Footer>
          </Card>
        </div>
      )}
    </>
  );
};

export default signin;
