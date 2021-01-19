import React from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from 'react-bootstrap';
import Select from 'react-select';

// images
import imageOne from '../assets/MarketPlace/image-1.jpg';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const MarketPlace = () => {
  return (
    <main className='bg-light'>
      <section className='pb-5'>
        <div
          className='d-flex align-items-center justify-content-center text-white text-center'
          style={{
            paddingTop: 70,
            height: '85vh',
            boxShadow: 'inset 0 0 0 1000px rgba(40,40,50,.8)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${imageOne})`,
          }}
        >
          <h1>Infrastructure Marketplace</h1>
        </div>
        <Container>
          <Form>
            <Row className='justify-content-center rounded-lg bg-white shadow p-4 mt-n5'>
              <Col md={4} className='mb-3 mb-md-0'>
                <FormControl type='text' placeholder='Search' />
              </Col>
              <Col md={4} className='mb-3 mb-md-0'>
                <Select options={options} placeholder='Filters' />
              </Col>
              <Col md={3}>
                <Button variant='outline-dark' block>
                  Find
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </section>
      <section className='pb-5'>
        <Container>
          <h2 className='text-center mb-5'>Results</h2>

          <div>
            {/* Card-Start */}
            <Card className='shadow-sm mb-5'>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Card.Text>

                <div className='text-right'>
                  <Card.Link className='btn' href='/'>
                    More view
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
            {/* Card-End */}
            {/* Card-Start */}
            <Card className='shadow-sm mb-5'>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Card.Text>

                <div className='text-right'>
                  <Card.Link className='btn' href='/'>
                    More view
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
            {/* Card-End */}
            {/* Card-Start */}
            <Card className='shadow-sm mb-5'>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Card.Text>

                <div className='text-right'>
                  <Card.Link className='btn' href='/'>
                    More view
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
            {/* Card-End */}
            {/* Card-Start */}
            <Card className='shadow-sm mb-5'>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Card.Text>

                <div className='text-right'>
                  <Card.Link className='btn' href='/'>
                    More view
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
            {/* Card-End */}
            {/* Card-Start */}
            <Card className='shadow-sm mb-5'>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Card.Text>

                <div className='text-right'>
                  <Card.Link className='btn' href='/'>
                    More view
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
            {/* Card-End */}
          </div>
        </Container>
      </section>
    </main>
  );
};
