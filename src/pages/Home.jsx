import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Images
import imageOne from '../assets/about/image-2.jpg';

export const Home = () => {
  return (
    <main className='bg-light'>
      <section className='pb-5'>
        <div
          className='d-flex align-items-center justify-content-center text-white text-center'
          style={{
            paddingTop: 70,
            height: '85vh',
            boxShadow: 'inset 0 0 0 1000px rgba(40,40,50,.4)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${imageOne})`,
          }}
        >
          <div>
            <h1>Welcome to Castro</h1>
            <p className='col-md-8 col-lg-6 mx-auto '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              dolore pariatur suscipit ut aliquid, aliquam saepe, deleniti
              tempora architecto accusamus quaerat distinctio ipsum fugiat
              perferendis minus! Minima error natus fugiat?
            </p>
          </div>
        </div>
      </section>
      <section className='pb-5'>
        <Container>
          <div className='mb-5 col-lg-10 px-0 mx-auto'>
            <h1 className='text-center font-weight-light'>
              "Special edition features full design with front and back details.
              Limited supply"
            </h1>
          </div>

          <div className='border-top my-5'></div>

          <Row className='justify-content-between'>
            <Col md={5}>
              <div>
                <img
                  className='rounded-lg shadow-sm mb-4'
                  height='100%'
                  width='100%'
                  src='https://images.unsplash.com/photo-1431102996501-f6379b157668?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                  alt=''
                />
                <h2 className='text-uppercase mb-2'>THE LAST DRAGON TANK</h2>
                <p className='text-black-50 small'>
                  Who's the master? You are when you're sporting this
                  exceptional detailed print. This premium tank won't make you
                  glow, but it'll feel good as heck on you.
                </p>
              </div>
            </Col>
            <Col md={5} className='mt-5 pt-4'>
              <div>
                <img
                  className='rounded-lg shadow-sm mb-4'
                  height='100%'
                  width='100%'
                  src='https://images.unsplash.com/photo-1582517378602-f109b395ce40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80'
                  alt=''
                />
                <h2 className='text-uppercase mb-2'>QUEEN GRACE</h2>
                <p className='text-black-50 small'>
                  Who's the master? You are when you're sporting this
                  exceptional detailed print. This premium tank won't make you
                  glow, but it'll feel good as heck on you.
                </p>
              </div>
            </Col>
          </Row>

          <Row className='justify-content-between'>
            <Col md={5}>
              <div>
                <img
                  className='rounded-lg shadow-sm mb-4'
                  height='100%'
                  width='100%'
                  src='https://images.unsplash.com/photo-1588070904976-ae5e41e2598d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80'
                  alt=''
                />
                <h2 className='text-uppercase mb-2'>THE LAST DRAGON TANK</h2>
                <p className='text-black-50 small'>
                  Who's the master? You are when you're sporting this
                  exceptional detailed print. This premium tank won't make you
                  glow, but it'll feel good as heck on you.
                </p>
              </div>
            </Col>
            <Col md={5} className='mt-5 '>
              <div>
                <img
                  className='rounded-lg shadow-sm mb-4'
                  height='100%'
                  width='100%'
                  src='https://cdn.pixabay.com/photo/2018/04/07/13/13/handshake-3298455_1280.jpg'
                  alt=''
                />
                <h2 className='text-uppercase mb-2'>QUEEN GRACE</h2>
                <p className='text-black-50 small'>
                  Who's the master? You are when you're sporting this
                  exceptional detailed print. This premium tank won't make you
                  glow, but it'll feel good as heck on you.
                </p>
              </div>
            </Col>
          </Row>

          <div className='border-top my-5'></div>

          <div className='col-lg-10 px-0 mx-auto'>
            <h1 className='text-center font-weight-light'>
              "A percentage of this sale will go towards charities committed to
              mental health services and awareness"
            </h1>
          </div>
        </Container>
      </section>
    </main>
  );
};
