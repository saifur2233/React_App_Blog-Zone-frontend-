import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
const axios = require('axios').default;
import * as Icon from 'react-bootstrap-icons';
import carouselImg1 from '../../assets/images/bg1.jpeg';
import carouselImg4 from '../../assets/images/bg4.jpeg';
import Pagination from 'react-bootstrap/Pagination';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';

const ControlledCarousel = () => {
  const backgroundColor = {
    backgroundColor: '#DCDCDC',
    padding: '20px',
  };
  const paginationStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [myblog, setMyBlog] = useState(null);
  const [isLoding, setIsLoding] = useState(true);
  const [error, setError] = useState(null);

  const pageSize = 6;
  const [paginatedPosts, setPaginatedPosts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const getData = async () => {
    await axios
      .get('http://localhost:3001/api/v1/posts')
      .then(function (response) {
        // handle success
        setMyBlog(response.data);
        setPaginatedPosts(_(response.data).slice(0).take(pageSize).value());
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

  const pageCount = myblog ? Math.ceil(myblog.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  //console.log('num of pages', pages);
  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(myblog).slice(startIndex).take(pageSize).value();
    setPaginatedPosts(paginatedPost);
  };

  return (
    <>
      <Carousel interval={2000} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="w-100"
            style={{ height: '550px' }}
            src={carouselImg1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <p>
              <Button href="/blogs">
                View Blogs <Icon.ArrowRight color="white" size={15} />
              </Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            style={{ height: '550px' }}
            src={carouselImg4}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>
              <Button href="/blogs">
                View Blogs <Icon.ArrowRight color="white" size={15} />
              </Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            style={{ height: '550px' }}
            src={carouselImg1}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <p>
              <Button href="/blogs">
                View Blogs <Icon.ArrowRight color="white" size={15} />
              </Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            style={{ height: '550px' }}
            src={carouselImg4}
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <p>
              <Button href="/blogs">
                View Blogs <Icon.ArrowRight color="white" size={15} />
              </Button>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div style={backgroundColor}>
        <Container className="py-5">
          {isLoding && <h2>Please wait, Blog is Loading...</h2>}
          {error && <h2>{error}</h2>}

          <Row xs={1} md={3} className="g-4">
            {myblog &&
              paginatedPosts.map((blog, id) => (
                <Col>
                  <Card key={id} border="info" style={{ height: '21rem' }}>
                    <Card.Body>
                      <Card.Title>
                        {blog.title.length < 30
                          ? `${blog.title}`
                          : `${blog.title.substring(0, 28)}`}
                        ...
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        <i>Author: {blog.username}</i>
                      </Card.Subtitle>
                      <Card.Text>
                        {blog.description.length < 235
                          ? `${blog.description}`
                          : `${blog.description.substring(0, 235)}`}
                        .....
                      </Card.Text>
                      <Button
                        variant="outline-primary"
                        onClick={() => {
                          navigate(`/viewblog/${blog.id}`);
                          //window.location.reload();
                        }}
                      >
                        Read More
                      </Button>{' '}
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Last updated {blog.updatedAt}
                      </small>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
        <div style={paginationStyle}>
          <Pagination size="lg">
            {pages.map((page) => (
              <Pagination.Item
                className={page === currentPage ? 'active' : ''}
                onClick={() => pagination(page)}
              >
                {page}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default ControlledCarousel;
