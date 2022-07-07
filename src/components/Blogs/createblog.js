import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const createblog = () => {
  return (
    <div>
        <Card style={{ width: '30rem' }}>
  <Card.Header><h4>Publish a Blog</h4></Card.Header>
  <Card.Body>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicTitle">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Title" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicDescription">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Description" />
  </Form.Group>
  
  <Button variant="success" type="submit">
    Publish
  </Button>
</Form>
  </Card.Body>
</Card>
    </div>
  )
}

export default createblog