import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

export const Experience = () => {
  return (
    <>
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
            variant='info'
            block
            type='submit'
            className='text-capitalize py-3'
          >
            <small>Save Education</small>
          </Button>
        </div>
      </Form>
    </>
  );
};
