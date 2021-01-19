import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const ProfilePost = () => {
  return (
    <section className='pt-5 d-flex align-items-center my-5'>
      <Row className='w-100 mx-0 px-lg-5'>
        <Col lg={2} className='mb-4 mb-lg-0'>
          <div className='shadow-sm border p-4 rounded-lg'>
            <ul className='nav flex-column'>
              <li className='nav-item mb-3'>
                <NavLink to='/'>Profile</NavLink>
              </li>
              <li className='nav-item mb-3'>
                <NavLink to='/profilePost'>Profile Post</NavLink>
              </li>
              <li className='nav-item mb-3'>
                <NavLink to='/profileDetails'>Profile Details</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/sign-in'>Logout</NavLink>
              </li>
            </ul>
          </div>
        </Col>
        <Col>
          <div className='shadow-sm border p-4 rounded-lg'>
            <Form>
              <h4>Post</h4>

              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Select options={options} placeholder='Country' />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Company name</Form.Label>
                    <Form.Control type='text' placeholder='Company name' />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Company number</Form.Label>
                    <Select options={options} placeholder='Company number' />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Tax number</Form.Label>
                    <Form.Control type='text' placeholder='Tax number' />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      as='textarea'
                      rows={4}
                      placeholder='Address'
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control type='text' placeholder='City' />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Pos code</Form.Label>
                    <Form.Control type='text' placeholder='Pos code' />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Employee</Form.Label>
                    <Select options={options} placeholder='employee' />
                  </Form.Group>
                </Col>

                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Year of experience</Form.Label>
                    <Select
                      options={options}
                      placeholder='Year of experience'
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={12}>
                  <Form.Group>
                    <Form.Label>Average project value</Form.Label>
                    <Form.Control
                      as='textarea'
                      rows='4'
                      placeholder='Average project value'
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label>Portfolio</Form.Label>
                    <Form.File
                      id='custom-file'
                      label='Upload portfolio'
                      custom
                    />
                    <Form.Text className='text-muted'>
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label>Project reference</Form.Label>
                    <Form.File
                      id='custom-file'
                      label='Upload project reference'
                      custom
                    />
                    <Form.Text className='text-muted'>
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <div className='col col-md-2 mt-4 ml-auto px-0'>
                <Button block variant='dark' type='submit'>
                  Post
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </section>
  );
};
