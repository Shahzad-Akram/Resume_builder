import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Images
import imageOne from '../../assets/profile/image-1.jpg';

export const SignIn = () => {
  return (
    <section className='vh-100 vh-100-none-on-small d-flex align-items-center bg-pattern-1'>
      <Container>
        <Row className='justify-content-between align-items-center'>
          <Col md={5}>
            <div className='mb-3 small d-flex align-items-baseline'>
              <span className='text-muted font-weight-bold'>
                Not a member yet?
              </span>
              <Link to='/sign-up' className='ml-2 text-info'>
                Join now
              </Link>
            </div>
            <Form>
              <Form.Group className='small' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className='small' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
              <Form.Group controlId='formBasicCheckbox'>
                <Form.Check type='checkbox' label='Check me out' />
              </Form.Group>
              <div className='mt-4'>
                <Button block variant='info' type='submit'>
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
          <Col md={6} className='order-first order-md-last mb-3 mb-md-0'>
            <img
              className='rounded-lg shadow'
              height='100%'
              width='100%'
              src={imageOne}
              alt='pic'
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
