import React from 'react';
import {
  Col,
  Form,
  FormControl,
  Row,
  Button,
  Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='bg-white px-3 px-lg-5 py-5 border-top'>
      <Container>
        <Row className='mx-0'>
          <Col
            md={5}
            lg={4}
            xl={3}
            className='ml-auto ml-md-0 mr-md-3 mr-lg-5 d-flex flex-column order-last order-md-first mt-3 mt-md-0'
          >
            <Form className='mb-5'>
              <FormControl type='text' placeholder='Your e-mail address...' />
              <Button variant='dark' block className='mt-3'>
                Subscribe
              </Button>
            </Form>

            <div className='text-muted text-center text-md-left mt-auto small'>
              Copyright © 2020. All rights reserved
            </div>
          </Col>
          <Col className='row mx-0 justify-content-around'>
            <div className='mr-md-5 col-12 col-md-auto'>
              <div className='d-flex justify-content-center flex-row flex-md-column small mb-2 mb-md-0'>
                <Link to='/about' className='btn p-0 mr-3 mr-md-0 text-left'>
                  <small> About Us</small>
                </Link>
                <Link to='/' className='btn p-0 mr-3 mr-md-0 text-left'>
                  <small> Contact Us</small>
                </Link>
                <Link to='/' className='btn p-0 mr-3 mr-md-0 text-left'>
                  <small> Shop</small>
                </Link>
                <Link to='/' className='btn p-0 mr-3 mr-md-0 text-left'>
                  <small> Blog</small>
                </Link>
              </div>
            </div>

            <div className='mr-md-5 col-12 col-md-auto'>
              <div className='d-flex justify-content-center flex-row flex-md-column small mb-2 mb-md-0'>
                <a
                  href='/'
                  target='_black'
                  className='btn p-0 mr-3 mr-md-0 text-left'
                >
                  <small>Facebook</small>
                </a>
                <a
                  href='/'
                  target='_black'
                  className='btn p-0 mr-3 mr-md-0 text-left'
                >
                  <small>Instagram</small>
                </a>
                <a
                  href='/'
                  target='_black'
                  className='btn p-0 mr-3 mr-md-0 text-left'
                >
                  <small>Twitter</small>
                </a>
              </div>
            </div>

            <div className='ml-auto ml-md-0  col-12 col-md-auto'>
              <div className='d-flex flex-column align-items-center align-items-md-start small'>
                <a href='tel:1234567890' className='btn p-0 text-left'>
                  <small>(+1) 234 5678 910</small>
                </a>
                <p className='mb-1 p-0 text-left'>contact@example.com</p>
                <p className='mb-1 p-0 text-left'>
                  71 Pilgrim Avenue, St.Chevy
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
