import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const blogs = () => {
    
  return (
    <div>
      <Container>
        <div className="d-flex flex-row">
        {Array.from({ length: 4 }).map((_, idx) => (
            <div className="p-2" key={idx}>
            <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"><i>Author: Saifur Rahman</i></Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content. Some quick example text to build on the card title and make up the bulk of
            the card's content.......
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
      </Card>
            </div>
        ))}
    </div>
    </Container>
    </div>
  )
}

export default blogs