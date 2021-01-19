import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const ProfileDetails = () => {
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
              <h4>Profile Details</h4>

              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Project Title</Form.Label>
                    <Form.Control type='text' placeholder='Project Title' />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Objective</Form.Label>
                    <Form.Control type='text' placeholder='Objective' />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label>Project Description</Form.Label>
                    <Form.Control
                      as='textarea'
                      rows={4}
                      placeholder='Project Description'
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label>Project Objective</Form.Label>
                    <Form.Control
                      as='textarea'
                      rows={4}
                      placeholder='Project Objective'
                    />
                  </Form.Group>
                </Col>
              </Row>

              <h4 className=' mt-2'>Requirements</h4>

              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Finance and funding</Form.Label>
                    <Select
                      options={options}
                      placeholder='Finance and funding'
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Technical</Form.Label>
                    <Select options={options} placeholder='Technical' />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Feasibility</Form.Label>
                    <Select options={options} placeholder='Feasibility' />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Media and marketing</Form.Label>
                    <Select
                      options={options}
                      placeholder='Media and marketing'
                    />
                  </Form.Group>
                </Col>
              </Row>

              <h4 className=' mt-2'>Acceptance Criteria</h4>

              <Row>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Experience area</Form.Label>
                    <Select options={options} placeholder='Experience area' />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Experience year</Form.Label>
                    <Select options={options} placeholder='Experience year' />
                  </Form.Group>
                </Col>

                <Col lg={4}>
                  <Form.Group>
                    <Form.Label>Average project value</Form.Label>
                    <Select
                      options={options}
                      placeholder='Average project value'
                    />
                  </Form.Group>
                </Col>
              </Row>

              <h4 className=' mt-2'>Submission deadline</h4>

              <Row>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label>Date picker</Form.Label>
                    <Form.Control type='date' placeholder='Date picker' />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label>Upload post</Form.Label>
                    <Form.File id='custom-file' label='Upload post' custom />
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
