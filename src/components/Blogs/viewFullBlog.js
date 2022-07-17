import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const viewFullBlog = ({ title }) => {
  const mainDiv = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px',
  };
  console.log({ title });
  //const {id, title, username,description, createdAt,updatedAt} = props
  return (
    <div style={mainDiv}>
      <Card border="warning" style={{ width: '50rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.Some quick example text to build on the
            card title and make up the bulk of the card's content. Some quick
            example text to build on the card title and make up the bulk of the
            card's content.Some quick example text to build on the card title
            and make up the bulk of the card's content.Some quick example text
            to build on the card title and make up the bulk of the card's
            content. bulk of the card's content. bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
          <Button variant="outline-primary" style={{ float: 'right' }}>
            Update
          </Button>{' '}
          <Button
            variant="outline-danger"
            style={{ float: 'right', marginRight: '5px' }}
          >
            Delete
          </Button>{' '}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default viewFullBlog;
