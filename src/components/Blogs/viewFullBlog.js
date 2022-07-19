import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
const axios = require('axios').default;

const viewFullBlog = () => {
  const mainDiv = {
    backgroundColor: 'lightGray',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px',
  };

  const { blogId } = useParams();
  const [blog, setBlog] = useState('');
  const [err, setError] = useState('');

  const viewBlogData = async () => {
    await axios
      .get(`http://localhost:3001/api/v1/posts/${blogId}`)
      .then(function (response) {
        setBlog(response.data);
      })
      .catch(function (error) {
        setError(error.message);
      });
  };

  useEffect(() => {
    viewBlogData();
  }, []);

  return (
    <div style={mainDiv}>
      {err && <h2>{err}</h2>}
      <Card border="warning" style={{ width: '50rem' }}>
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {blog.username}
          </Card.Subtitle>
          <Card.Text>{blog.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated {blog.updatedAt}</small>
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
