import Button from 'react-bootstrap/Carousel'
import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import carouselImg1 from '../../assets/images/bg1.jpeg'
import carouselImg2 from '../../assets/images/bg2.jpeg'
import carouselImg3 from '../../assets/images/bg3.jpeg'
import carouselImg4 from '../../assets/images/bg4.jpeg'

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel interval={2000} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="w-100"
          style={{height: '550px'}}
          src={carouselImg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          style={{height: '550px'}}
          src={carouselImg2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          style={{height: '550px'}}
          src={carouselImg3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          style={{height: '550px'}}
          src={carouselImg4}
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>  
  )
}

export default ControlledCarousel