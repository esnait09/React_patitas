import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imagen from '../assets/img/gatocama.jpg';

function Carrusel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          src={imagen}
          alt="First slide"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={imagen}  // Reemplaza con otra imagen si tienes
          alt="Second slide"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={imagen}  // Reemplaza con otra imagen si tienes
          alt="Third slide"
          className="d-block w-100"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
