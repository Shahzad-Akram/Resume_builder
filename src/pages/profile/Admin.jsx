import React, { useState } from 'react';
import { Col, Form, Row, Table, Button, Modal } from 'react-bootstrap';
import { Question } from '../../components/Question';
import { SideBar } from '../../components/SideBar';

import {
  faPlusCircle,
  faRadiationAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const tableArr = [
  {
    number: 1,
    title: 'Tell your new employer about yourself',
    subtitle: 'in 60 seconds or in 300 words or less',
  },
  {
    number: 2,
    title: 'Talk about your strengths',
    subtitle: 'in 60 seconds or 150 words or less',
  },
  {
    number: 3,
    title: 'Where do you see yourself in 5 years?',
    subtitle: 'In 60 seconds or 150 words or less',
  },
  {
    number: 4,
    title:
      'What are the most important things you are looking for in your new role?',
    subtitle: 'In 60 seconds or 150 words or less',
  },
  {
    number: 5,
    title: 'Why are you leaving your current job?',
    subtitle: 'in 60 seconds or 150 words or less',
  },
  {
    number: 6,
    title: 'What are your salary expectations?',
  },
  {
    number: 7,
    title: 'Why should your new employer hire you?',
    subtitle: 'In 60 seconds or 150 words or less',
  },
  {
    number: 8,
    title: 'What do you consider your biggest professional achievement?',
    subtitle: 'in 60 seconds or 150 words or less',
  },

  {
    number: 9,
    title: 'What do you consider your biggest personal achievement?',
    subtitle: 'In 60 seconds or 150 words or less',
  },
  {
    number: 10,
    title: 'What kind of work environment do you like best?',
    subtitle: 'in 60 seconds or 150 words or less',
  },
  {
    number: 11,
    title: 'Tell your new employer about a time you disagreed with a decision.',
    subtitle: 'in 60 seconds or 150 words or less',
  },
  {
    number: 12,
    title:
      'What can your new employer expect from you within the first 3 months of employment?',
    subtitle: 'in 60 seconds or 150 words or less',
  },
  {
    number: 13,
    title: 'What do you like to do outside of work?',
    subtitle: 'in 60 seconds or 150 words or less',
  },
  {
    number: 14,
    title: 'What questions would you ask your new employer?',
    subtitle: 'in 60 seconds or 150 words or less',
  },
];

export const Admin = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Modal
        size='lg'
        centered
        scrollable
        show={show}
        onHide={() => setShow(false)}
      >
        <Modal.Body className='p-4'>
          <Question />
        </Modal.Body>
      </Modal>
      <section className='pt-5 d-flex align-items-center my-5'>
        <Row className='w-100 mx-0 px-lg-5'>
          <Col lg={2} className='mb-4 mb-lg-0'>
            <SideBar />
          </Col>
          <Col>
            <div className='shadow-sm border p-4 rounded-lg'>
              <div className='row mx-0 align-items-center justify-content-between mb-2'>
                <h4 className='mb-0'>Questions Section</h4>
                <Button variant='link' onClick={() => setShow(true)}>
                  <FontAwesomeIcon icon={faPlusCircle} />
                </Button>
              </div>
              <Form>
                <div>
                  <Table responsive bordered>
                    <thead>
                      <tr>
                        <th className='bg-info text-white text-center'>#</th>
                        <th className='bg-info text-white'>Questions</th>
                        <th className='bg-info text-white text-center'>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableArr.map((value) => (
                        <tr>
                          <td className='text-center font-weight-bold'>
                            {value.number}
                          </td>
                          <td className='small'>
                            <b className='mr-1'>{value.title}</b>
                            <i>{value.subtitle}</i>
                          </td>
                          <td
                            className='small text-center'
                            style={{ width: '10%' }}
                          >
                            <Button variant='link'>
                              <FontAwesomeIcon icon={faRadiationAlt} />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>

                <div className='col col-md-6 col-lg-4 mt-2 mx-auto px-0 '>
                  <Button block variant='info' type='submit' className='py-4'>
                    Save
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};
