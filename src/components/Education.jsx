import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

export const Education = () => {
  return (
    <>
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
