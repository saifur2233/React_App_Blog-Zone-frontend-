import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

const allBlogs = () => {
  return (
    <div>
        <Container className='py-5'>
        <Row xs={3} md={3} className="g-4">
  {Array.from({ length: 9 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"><i>Author: Saifur Rahman</i></Card.Subtitle>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
            Some quick example text to build on the card title and make up the bulk of
            the card's content. Some quick example text to build on the card title and make up the bulk of
            the card's content.......
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
      </Card>
    </Col>
  ))}
</Row>
        </Container>
    </div>
  )
}

export default allBlogs