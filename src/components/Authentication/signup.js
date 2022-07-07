import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import background from '../../assets/images/login/login3.jpg'

const signup = () => {
  const myStyle = {
    backgroundImage: `url(${background})`,
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height:'100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const titleStyle = {
    backgroundColor: '#0d6efd',
    color: 'white',
    textAlign:'center'
  }
  const footerStyle = {
    textAlign: 'center',
    color: '#999999'
  }

  return (
    <div style={myStyle}>
<Card style={{ width: '30rem' }}>
  <Card.Header style={titleStyle}><h4>Sign Up</h4></Card.Header>
  <Card.Body>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter your Username" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter your Email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter your Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </Card.Body>
  <Card.Footer style={footerStyle}>
    <p>Already have an account?  
    <Card.Link href="/signin"> Sign In</Card.Link>
    </p>
    </Card.Footer>
</Card>
    </div>
  )
}

export default signup