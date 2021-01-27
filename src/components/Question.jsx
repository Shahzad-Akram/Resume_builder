import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

export const Question = () => {
  return (
    <>
      <h4 className='mb-4 font-weight-bold text-center'>Add a Question</h4>
      <Form>
        <Row>
          <Col md={12}>
            <Form.Group>
              <Form.Control
                as='textarea'
                className='input-group-text text-left'
                placeholder='Add a Question'
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
            <small>Save Question</small>
          </Button>
        </div>
      </Form>
    </>
  );
};
