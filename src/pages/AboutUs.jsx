import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Images
import imageOne from '../assets/about/image-1.svg';

export const AboutUs = () => {
  return (
    <main className='bg-light'>
      <section className='pb-5'>
        <div
          className='d-flex align-items-center justify-content-center text-white text-center'
          style={{
            paddingTop: 70,
            height: '85vh',
            boxShadow: 'inset 0 0 0 1000px rgba(40,40,50,.7)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${imageOne})`,
          }}
        >
          {/* <h1>About Us</h1> */}
        </div>
        <Container className='px-0 px-md-3'>
          <div className='rounded-lg bg-white shadow p-3 p-md-5 mt-n5'>
            <div className='p-md-4'>
              <h3 className='mb-4'>Welcome to Castro</h3>

              <p className='mb-4'>
                Etiam dictum porttitor malesuada. In justo massa, venenatis eu
                laoreet vel, pellentesque non ligula. Nulla laoreet ut eros id
                maximus. Quisque odio orci, vulputate varius rutrum ut,
                elementum id sapien.Cras elementum nec quam ut molestie. Donec
                eu nibh sem. Praesent quis congue justo, pharetra mollis ipsum.
                Sed scelerisque nunc eu finibus pellentesque. Etiam non eros ex.
                Maecenas eu faucibus lectus.
              </p>

              <p className='mb-4'>
                Morbi mattis turpis in leo fermentum egestas. Maecenas accumsan
                dolor id varius euismod. Phasellus ac nisi eu augue tristique
                ullamcorper. Nam eu consectetur justo. Curabitur sit amet
                vulputate lacus, sed feugiat ante. Nam id commodo arcu, eu
                venenatis nisl. Aenean sed porttitor nulla.
              </p>

              <div className='border-top mb-5'></div>

              <h3 className='mb-4'>Our Story</h3>

              <p className='mb-4'>
                Etiam dictum porttitor malesuada. In justo massa, venenatis eu
                laoreet vel, pellentesque non ligula. Nulla laoreet ut eros id
                maximus. Quisque odio orci, vulputate varius rutrum ut,
                elementum id sapien.Cras elementum nec quam ut molestie. Donec
                eu nibh sem. Praesent quis congue justo, pharetra mollis ipsum.
                Sed scelerisque nunc eu finibus pellentesque. Etiam non eros ex.
                Maecenas eu faucibus lectus.
              </p>

              <div className='mb-4'>
                <iframe
                  width='100%'
                  height='500'
                  src='https://www.youtube.com/embed/XHOmBV4js_E'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
              </div>

              <p className='mb-4 font-weight-bold'>
                Etiam dictum porttitor malesuada. In justo massa, venenatis eu
                laoreet vel, pellentesque non ligula. Nulla laoreet ut eros id
                maximus. Quisque odio orci, vulputate varius rutrum ut,
                elementum id sapien.
              </p>

              <p className='mb-4'>
                Etiam dictum porttitor malesuada. In justo massa, venenatis eu
                laoreet vel, pellentesque non ligula. Nulla laoreet ut eros id
                maximus. Quisque odio orci, vulputate varius rutrum ut,
                elementum id sapien.Cras elementum nec quam ut molestie. Donec
                eu nibh sem. Praesent quis congue justo, pharetra mollis ipsum.
                Sed scelerisque nunc eu finibus pellentesque. Etiam non eros ex.
                Maecenas eu faucibus lectus.
              </p>

              <div className='border-top mb-5'></div>

              <h3 className='mb-4'>Our Team Member</h3>

              <Row className='row-cols-1 row-cols-md-2 row-cols-lg-4'>
                <Col>
                  <div className='mb-3'>
                    <img
                      height='100%'
                      width='100%'
                      src='https://elementor-10aba.kxcdn.com/kera/wp-content/uploads/2020/01/team-01.jpg'
                      alt='team member'
                    />
                  </div>
                  <div className='text-center small'>
                    <div className='font-weight-bold'>Kaylee Fritz</div>
                    <div className='text-muted'>Operations Manager</div>
                  </div>
                </Col>

                <Col>
                  <div className='mb-3'>
                    <img
                      height='100%'
                      width='100%'
                      src='https://elementor-10aba.kxcdn.com/kera/wp-content/uploads/2020/01/team-01.jpg'
                      alt='team member'
                    />
                  </div>
                  <div className='text-center small'>
                    <div className='font-weight-bold'>Kaylee Fritz</div>
                    <div className='text-muted'>Operations Manager</div>
                  </div>
                </Col>

                <Col>
                  <div className='mb-3'>
                    <img
                      height='100%'
                      width='100%'
                      src='https://elementor-10aba.kxcdn.com/kera/wp-content/uploads/2020/01/team-01.jpg'
                      alt='team member'
                    />
                  </div>
                  <div className='text-center small'>
                    <div className='font-weight-bold'>Kaylee Fritz</div>
                    <div className='text-muted'>Operations Manager</div>
                  </div>
                </Col>

                <Col>
                  <div className='mb-3'>
                    <img
                      height='100%'
                      width='100%'
                      src='https://elementor-10aba.kxcdn.com/kera/wp-content/uploads/2020/01/team-01.jpg'
                      alt='team member'
                    />
                  </div>
                  <div className='text-center small'>
                    <div className='font-weight-bold'>Kaylee Fritz</div>
                    <div className='text-muted'>Operations Manager</div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};
