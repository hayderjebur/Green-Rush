import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Meta from '../components/Meta';
import { listProducts } from '../actions/productActions';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <Fragment>
      <Meta />
      {/* !keyword ? (
        // <ProductCarousel />
        <h1>hello</h1>
      ) : ( */}
      {/* <Link to='/' className='btn btn-light'>
        Go Back
      </Link> */}
      {/* ) */}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Fragment>
          <Col xs lg='2'></Col>
          <Col md='auto'>
            <Row className='justify-content-md-center'>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={10} lg={10} xl={8}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </Col>

          <Col xs lg='2'></Col>
        </Fragment>
      )}
    </Fragment>
  );
};

export default HomeScreen;
