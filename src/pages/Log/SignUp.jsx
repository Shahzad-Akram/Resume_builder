import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';

// Images
import imageTwo from '../../assets/profile/image-2.jpg';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const SignUp = () => {
  return (
    <section className='bg-pattern vh-100 vh-100-none-on-small d-flex align-items-center text-white'>
      <Container>
        <Row className='justify-content-between align-items-center'>
          <Col lg={12} xl={6}>
            <div className='mb-3 small d-flex align-items-baseline'>
              <span className='text-white-50 font-weight-bold'>
                Already a member?
              </span>
              <Link to='/sign-in' className='ml-2'>
                Sign In
              </Link>
            </div>
            <Form className='small'>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Confirm your password</Form.Label>
                    <Form.Control type='password' placeholder='Password' />
                  </Form.Group>
                </Col>
              </Row>

              {/* <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Select your requirements from below</Form.Label>
                    <Select options={options} placeholder='Requirements' />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>
                      Select from below your area of operation
                    </Form.Label>
                    <Select options={options} placeholder='Area of operation' />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Tell us your project finance needs</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='project finance needs'
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>
                      What is the size of your organisation
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='size of your organisation'
                    />
                  </Form.Group>
                </Col>
              </Row> */}

              <div className='mt-4'>
                <Button block variant='info' type='submit'>
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
          <Col
            md={6}
            lg={5}
            className='order-first order-xl-last mb-3 mb-xl-0 mx-auto mx-xl-0'
          >
            <img
              // className='rounded-lg shadow'
              height='100%'
              width='100%'
              src={imageTwo}
              alt='pic'
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
