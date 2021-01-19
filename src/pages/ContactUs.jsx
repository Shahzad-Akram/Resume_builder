import React, { useState } from 'react';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelopeOpen,
  faHeadset,
  faHome,
  faLongArrowAltRight,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
// images
import imageOne from '../assets/Contacts/image-1.jpg';
import { Link } from 'react-router-dom';

export const ContactUs = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main className='bg-light'>
      <section className='pb-5'>
        <div
          className='d-flex align-items-center justify-content-center text-white text-center'
          style={{
            paddingTop: 70,
            height: '50vh',
            boxShadow: 'inset 0 0 0 1000px rgba(40,40,50,.7)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `url(${imageOne})`,
          }}
        >
          <div className='py-4 px-4 px-md-5 border rounded'>
            <h1 className='font-weight-light mb-0'>our contacts</h1>
          </div>
        </div>
      </section>
      <section className='pb-5'>
        <div className='text-center col-md-10 col-lg-8 col-xl-7 mx-auto mb-5'>
          <div className='text-info mb-2'>Send Message</div>
          <h4 className='font-weight-bold mb-2'>Feel free to contact us.</h4>
          <p>
            Energistically predominate high-payoff alignments whereas
            maintainable materials timely deliverables. Synergistically leverage
            other's holistic mindshare via high-payoff expertise.
          </p>
        </div>
        <Container>
          <Row className='row-cols-1 row-cols-md-2 row-cols-lg-4'>
            <Col className='mb-4 mb-lg-0'>
              <div className='bg-white py-4 rounded-lg shadow-sm'>
                <a href='tel:1234567890' className='text-center text-dark'>
                  <div className='mb-3'>
                    <FontAwesomeIcon icon={faPhone} className='h3 mb-0' />
                  </div>
                  <div className='font-weight-bold mb-2'>Call Us</div>
                  <div className='text-muted'>
                    <small>(+1) 234 5678 910</small>
                  </div>
                </a>
              </div>
            </Col>

            <Col className='mb-4 mb-lg-0'>
              <div className='bg-white py-4 rounded-lg shadow-sm'>
                <Link className='text-center text-dark'>
                  <div className='mb-3'>
                    <FontAwesomeIcon
                      icon={faEnvelopeOpen}
                      className='h3 mb-0'
                    />
                  </div>
                  <div className='font-weight-bold mb-2'>Mail Us</div>
                  <div className='text-muted'>
                    <small>admin@mail.com</small>
                  </div>
                </Link>
              </div>
            </Col>

            <Col className='mb-4 mb-lg-0'>
              <div className='bg-white py-4 rounded-lg shadow-sm'>
                <Link className='text-center text-dark'>
                  <div className='mb-3'>
                    <FontAwesomeIcon icon={faHome} className='h3 mb-0' />
                  </div>
                  <div className='font-weight-bold mb-2'>Visit Us</div>
                  <div className='text-muted'>
                    <small>Otaki, 32 Wilson Street</small>
                  </div>
                </Link>
              </div>
            </Col>

            <Col className='mb-4 mb-lg-0'>
              <div className='bg-white py-4 rounded-lg shadow-sm'>
                <Link className='text-center text-dark'>
                  <div className='mb-3'>
                    <FontAwesomeIcon icon={faHeadset} className='h3 mb-0' />
                  </div>
                  <div className='font-weight-bold mb-2'>Support</div>
                  <div className='text-muted'>
                    <small>Live chart 24/7</small>
                  </div>
                </Link>
              </div>
            </Col>
          </Row>

          <div className='border-top border-info my-5'></div>

          <Row>
            <Col lg={6} className='order-last order-lg-first mt-5 mt-lg-0'>
              <div className='bg-white p-4 shadow-sm rounded-lg'>
                <h5 className='mb-4'>Send as a message:</h5>
                <Form>
                  <Form.Group controlId='formBasicName'>
                    <Form.Control
                      className='input-group-text text-left'
                      type='name'
                      placeholder='Your name'
                    />
                  </Form.Group>

                  <Form.Group controlId='formBasicEmail'>
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control
                      className='input-group-text text-left'
                      type='email'
                      placeholder='Email address'
                    />
                    {/* <Form.Text className='text-muted'>
                      We'll never share your email with anyone else.
                    </Form.Text> */}
                  </Form.Group>

                  <Form.Group controlId='formBasicPhoneNumber'>
                    <Form.Control
                      className='input-group-text text-left'
                      type='number'
                      placeholder='Phone number'
                    />
                  </Form.Group>

                  <Form.Group controlId='exampleForm.ControlTextarea1'>
                    <Form.Control
                      as='textarea'
                      rows={6}
                      placeholder='Enter your message'
                      className='input-group-text text-left'
                    />
                  </Form.Group>

                  <Form.Group controlId='formBasicCheckbox'>
                    <Form.Check
                      type='checkbox'
                      label='Email prefered way to contact'
                    />
                  </Form.Group>
                  <div className='mt-5'>
                    <Button
                      variant='dark'
                      block
                      type='submit'
                      className='text-capitalize'
                    >
                      Send message
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
            <Col lg={6} className='align-self-center'>
              <div className='col-lg-9'>
                <div className='mb-3 text-info'>
                  <FontAwesomeIcon
                    icon={faLongArrowAltRight}
                    className='h3 mb-0'
                  />
                </div>

                <h3>Ready to start making busines with us?</h3>
                <p>
                  Rapidiously transform integrated processes via frictionless
                  paradigms. Intrinsicly productize proactive catalysts for
                  change via economically sound relationships.
                </p>
                <Button
                  className='text-capitalize'
                  variant='outline-dark'
                  onClick={handleShow}
                >
                  Get quote
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header
          className='border-0'
          closeButton
          style={{ fontFamily: 'auto' }}
        ></Modal.Header>
        <Modal.Body>
          <h5 className='mb-4'>Send new request:</h5>
          <Form>
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Control
                as='textarea'
                rows={6}
                placeholder='Enter your message'
                className='input-group-text text-left'
              />
            </Form.Group>

            <Form.Group controlId='formBasicEmail'>
              <Form.Control
                className='input-group-text text-left'
                type='email'
                placeholder='Email address'
              />
            </Form.Group>
            <div className='mt-4'>
              <Button
                variant='dark'
                block
                type='submit'
                className='text-capitalize'
              >
                Send message
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </main>
  );
};
