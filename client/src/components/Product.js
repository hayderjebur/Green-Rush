import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <Container>
      {/* <Card className='ml-5 p-3 '> */}
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
      {/* </Card> */}
    </Container>
  );
};

export default Product;
