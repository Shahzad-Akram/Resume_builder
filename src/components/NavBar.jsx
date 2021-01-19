import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../assets/Logo.png';

export const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <Navbar
      bg='transparent'
      variant='dark'
      expand='md'
      className={navbar ? `fixed-top w-100 active` : 'fixed-top w-100'}
    >
      <Navbar.Brand as={Link} to='/' className='d-flex align-items-center'>
        <img
          alt=''
          src={Logo}
          // width='50'
          height='50'
          className='d-inline-block align-top mr-2'
          style={{ filter: 'invert(1)' }}
        />
      </Navbar.Brand>

      <div className='ml-auto'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto text-center my-3'>
            <NavLink className='mr-3 mb-3 mb-md-0' to='/'>
              Profile View
            </NavLink>
            <NavLink className='mr-3 mb-3 mb-md-0' to='/profile'>
              Profile
            </NavLink>

            <NavLink className='mr-3 mb-3 mb-md-0' to='/sign-up'>
              Signup
            </NavLink>
            <NavLink className='mr-3 mb-3 mb-md-0' to='/sign-in'>
              Signin
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
