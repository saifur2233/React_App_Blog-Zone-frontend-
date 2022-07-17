import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
const axios = require('axios').default;

const allBlogs = () => {
  const backgroundColor = {
    backgroundColor: '#DCDCDC',
  };

  const [myblog, setMyBlog] = useState(null);
  const [isLoding, setIsLoding] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    await axios
      .get('http://localhost:3001/api/v1/posts')
      .then(function (response) {
        // handle success
        setMyBlog(response.data);
      })
      .catch(function (error) {
        // handle error
        setError(error.message);
        //console.log(error);
      })
      .then(function () {
        // always executed
        setIsLoding(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={backgroundColor}>
      <Container className="py-5">
        {isLoding && <h2>Please wait, Blog is Loading...</h2>}
        {error && <h2>{error}</h2>}

        <Row xs={1} md={3} className="g-4">
          {myblog &&
            myblog.reverse().map((blog, id) => (
              <Col>
                <Card key={id} border="info" style={{ height: '21rem' }}>
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      <i>Author: {blog.username}</i>
                    </Card.Subtitle>
                    <Card.Text>{blog.description}</Card.Text>
                    <Button variant="outline-primary">Read More</Button>{' '}
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default allBlogs;
