import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export const Profile = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className='pt-5 d-flex align-items-center my-5'>
      <Row className=' w-100 mx-0 px-lg-5'>
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
            <h4 className='text-center'>Your profile</h4>
            <Form>
              <div className='my-4 d-flex flex-column align-items-center'>
                <Form.Label>Change Avatar</Form.Label>
                <span className='avatar-container'>
                  <img
                    height='100%'
                    width='100%'
                    src='https://graph.facebook.com/100008343750912/picture?width=400&height=400'
                    alt=''
                  />
                  <input type='file' />
                </span>
              </div>

              <Row className='border-bottom mb-3 pb-2'>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label className='font-weight-bold small'>
                      First Name
                    </Form.Label>
                    <Form.Control type='text' placeholder='Enter your name' />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label className='font-weight-bold small'>
                      Last Name
                    </Form.Label>
                    <Form.Control type='text' placeholder='Enter your name' />
                  </Form.Group>
                </Col>
                <Col className='align-self-end'>
                  <Button block variant='info' className='mb-3'>
                    Save
                  </Button>
                </Col>
              </Row>

              <Row className='border-bottom mb-3 pb-2'>
                <Col xs={12}>
                  <Form.Label className='font-weight-bold small'>
                    Education
                  </Form.Label>
                </Col>
                <Col md={6} className='d-flex flex-column'>
                  <Form.Group className='flex-grow-1'>
                    <Button
                      variant='bt-box-1'
                      block
                      className='h-100 p-3 text-left rounded-lg d-flex flex-column'
                    >
                      <div className='font-weight-bold small'>
                        Msc in Economics and Business Administration
                      </div>
                      <div className='text-black-50 small'>
                        The University of Edinburgh
                      </div>
                      <div className='small text-black-50'>
                        06/2014 - 07/2017
                      </div>
                      <div className='small mt-2'>
                        <div className='font-weight-bold'>Question</div>
                        <span className='h6'>
                          <small>
                            Why did you choose to study this
                            degree/course/certificate?
                          </small>
                        </span>
                        <p className='text-black-50 mb-2'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <div className='bt-box-1__item '>
                        <Button
                          variant='success'
                          className='p-0 rounded-circle text-white d-flex align-items-center justify-content-center mr-1'
                          style={{ height: 22, width: 22 }}
                          onClick={handleShow}
                        >
                          <FontAwesomeIcon size='xs' icon={faPencilAlt} />
                        </Button>

                        <Button
                          variant='danger'
                          className='p-0 rounded-circle text-white d-flex align-items-center justify-content-center'
                          style={{ height: 22, width: 22 }}
                        >
                          <FontAwesomeIcon size='xs' icon={faTimes} />
                        </Button>
                      </div>
                    </Button>
                  </Form.Group>
                </Col>
                <Col md={6} className='d-flex flex-column'>
                  <Form.Group className='flex-grow-1'>
                    <Button
                      variant='bt-box-1'
                      block
                      className='h-100 p-3 text-left rounded-lg d-flex flex-column'
                    >
                      <div className='font-weight-bold small'>
                        Msc in Economics and Business Administration
                      </div>
                      <div className='text-black-50 small'>
                        The University of Edinburgh
                      </div>
                      <div className='small text-black-50'>
                        06/2014 - 07/2017
                      </div>
                      <div className='small mt-2'>
                        <div className='font-weight-bold'>Question</div>
                        <span className='h6'>
                          <small>
                            Why did you choose to study this
                            degree/course/certificate?
                          </small>
                        </span>
                        <p className='text-black-50 mb-2'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>

                      <div className='bt-box-1__item '>
                        <Button
                          variant='success'
                          className='p-0 rounded-circle text-white d-flex align-items-center justify-content-center mr-1'
                          style={{ height: 22, width: 22 }}
                          onClick={handleShow}
                        >
                          <FontAwesomeIcon size='xs' icon={faPencilAlt} />
                        </Button>

                        <Button
                          variant='danger'
                          className='p-0 rounded-circle text-white d-flex align-items-center justify-content-center'
                          style={{ height: 22, width: 22 }}
                        >
                          <FontAwesomeIcon size='xs' icon={faTimes} />
                        </Button>
                      </div>
                    </Button>
                  </Form.Group>
                </Col>

                <Col md={12} className='align-self-stretch mb-3'>
                  <div className='col-12 col-md-6 col-lg-4 px-0 mx-auto'>
                    <Button
                      block
                      variant='outline-info'
                      className='h-100 py-4'
                      onClick={handleShow}
                    >
                      Add Education
                    </Button>
                  </div>
                </Col>
              </Row>

              <Row className='border-bottom mb-3 pb-2'>
                <Col xs={12}>
                  <Form.Label className='font-weight-bold small'>
                    Experience
                  </Form.Label>
                </Col>
                <Col md={6} className='d-flex flex-column'>
                  <Form.Group className='flex-grow-1'>
                    <Button
                      variant='bt-box-1'
                      block
                      className='h-100 p-3 text-left rounded-lg d-flex flex-column'
                    >
                      <div className='font-weight-bold small'>
                        Msc in Economics and Business Administration
                      </div>
                      <div className='text-black-50 small'>
                        The University of Edinburgh
                      </div>
                      <div className='small text-black-50'>
                        06/2014 - 07/2017
                      </div>
                      <div className='small mt-2'>
                        <div className='font-weight-bold'>Question</div>
                        <div>
                          <span className='h6'>
                            <small>What did a typical day involve?</small>
                          </span>
                          <p className='text-black-50 mb-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                        <div>
                          <span className='h6'>
                            <small>
                              What programs did you use? And are you
                              beginner/intermediate/expert{' '}
                            </small>
                          </span>
                          <p className='text-black-50 mb-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                      <div className='bt-box-1__item '>
                        <Button
                          variant='success'
                          className='p-0 rounded-circle text-white d-flex align-items-center justify-content-center mr-1'
                          style={{ height: 22, width: 22 }}
                          onClick={handleShow}
                        >
                          <FontAwesomeIcon size='xs' icon={faPencilAlt} />
                        </Button>

                        <Button
                          variant='danger'
                          className='p-0 rounded-circle text-white d-flex align-items-center justify-content-center'
                          style={{ height: 22, width: 22 }}
                        >
                          <FontAwesomeIcon size='xs' icon={faTimes} />
                        </Button>
                      </div>
                    </Button>
                  </Form.Group>
                </Col>
                <Col md={6} className='d-flex flex-column'>
                  <Form.Group className='flex-grow-1'>
                    <Button
                      variant='bt-box-1'
                      block
                      className='h-100 p-3 text-left rounded-lg d-flex flex-column'
                    >
                      <div className='font-weight-bold small'>
                        Msc in Economics and Business Administration
                      </div>
                      <div className='text-black-50 small'>
                        The University of Edinburgh
                      </div>
                      <div className='small text-black-50'>
                        06/2014 - 07/2017
                      </div>
                      <div className='small mt-2'>
                        <div className='font-weight-bold'>Question</div>
                        <div>
                          <span className='h6'>
                            <small>What did a typical day involve?</small>
                          </span>
                          <p className='text-black-50 mb-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                        <div>
                          <span className='h6'>
                            <small>
                              What programs did you use? And are you
                              beginner/intermediate/expert{' '}
                            </small>
                          </span>
                          <p className='text-black-50 mb-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                      <div className='bt-box-1__item '>
                        <Button
                          variant='success'
                          className='p-0 rounded-circle text-white d-flex align-items-center justify-content-center mr-1'
                          style={{ height: 22, width: 22 }}
                          onClick={handleShow}
                        >
                          <FontAwesomeIcon size='xs' icon={faPencilAlt} />
                        </Button>

                        <Button
                          variant='danger'
                          className='p-0 rounded-circle text-white d-flex align-items-center justify-content-center'
                          style={{ height: 22, width: 22 }}
                        >
                          <FontAwesomeIcon size='xs' icon={faTimes} />
                        </Button>
                      </div>
                    </Button>
                  </Form.Group>
                </Col>

                <Col md={12} className='align-self-stretch mb-3'>
                  <div className='col-12 col-md-6 col-lg-4 px-0 mx-auto'>
                    <Button
                      block
                      variant='outline-info'
                      className='h-100 py-4'
                      onClick={() => setShow2(true)}
                    >
                      Add Experience
                    </Button>
                  </div>
                </Col>
              </Row>

              <div>
                <div className='col col-md-6 col-lg-4 mt-4 mx-auto px-0 '>
                  <Button block variant='info' type='submit' className='py-4'>
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </Col>
      </Row>

      <Modal size='lg' centered scrollable show={show} onHide={handleClose}>
        <Modal.Body className='p-4'>
          <h4 className='mb-4 font-weight-bold text-center'>Education</h4>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    <small className='font-weight-bold'>School</small>
                  </Form.Label>
                  <Form.Control
                    className='input-group-text text-left'
                    type='text'
                    placeholder='School'
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    <small className='font-weight-bold'>Degree</small>
                  </Form.Label>
                  <Form.Control
                    className='input-group-text text-left'
                    type='text'
                    placeholder='Degree'
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Label>
                  <small className='font-weight-bold'>Start Date</small>
                </Form.Label>
                <Form.Group>
                  <Form.Control
                    className='input-group-text text-left'
                    type='date'
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Label>
                  <small className='font-weight-bold'>End Date</small>
                </Form.Label>
                <Form.Group>
                  <Form.Control
                    className='input-group-text text-left'
                    type='date'
                  />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Label>
                  <small className='font-weight-bold'>Question</small>
                </Form.Label>
                <Form.Group>
                  <Form.Control
                    as='textarea'
                    className='input-group-text text-left'
                    placeholder='Why did you choose to study this degree/course/certificate? (In 60 seconds or 150 words or less)'
                    type='text'
                    rows={4}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className='mt-3'>
              <Button
                variant='dark'
                block
                type='submit'
                className='text-capitalize'
              >
                <small>Save Education</small>
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        size='lg'
        centered
        scrollable
        show={show2}
        onHide={() => setShow2(false)}
      >
        <Modal.Body className='p-4'>
          <h4 className='mb-4 font-weight-bold text-center'>Experience</h4>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    <small className='font-weight-bold'>Title</small>
                  </Form.Label>
                  <Form.Control
                    className='input-group-text text-left'
                    type='text'
                    placeholder='Title'
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    <small className='font-weight-bold'>Employment Type</small>
                  </Form.Label>
                  <Form.Control
                    className='input-group-text text-left'
                    type='text'
                    placeholder='Employment Type'
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group>
                  <Form.Label>
                    <small className='font-weight-bold'>Company Name</small>
                  </Form.Label>
                  <Form.Control
                    className='input-group-text text-left'
                    type='text'
                    placeholder='Company Name'
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Label>
                  <small className='font-weight-bold'>Start Date</small>
                </Form.Label>
                <Form.Group>
                  <Form.Control
                    className='input-group-text text-left'
                    type='date'
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Label>
                  <small className='font-weight-bold'>Finish Date</small>
                </Form.Label>
                <Form.Group>
                  <Form.Control
                    className='input-group-text text-left'
                    type='date'
                  />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Label>
                  <small className='font-weight-bold'>Question</small>
                </Form.Label>
                <Form.Group>
                  <Form.Control
                    as='textarea'
                    className='input-group-text text-left'
                    placeholder='What did a typical day involve? (In 60 seconds or 150 words or less)'
                    type='text'
                    rows={4}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    as='textarea'
                    className='input-group-text text-left'
                    placeholder='What programs did you use? And are you beginner/intermediate/expert (no limit)'
                    type='text'
                    rows={4}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className='mt-3'>
              <Button
                variant='dark'
                block
                type='submit'
                className='text-capitalize'
              >
                <small>Save Education</small>
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </section>
  );
};
