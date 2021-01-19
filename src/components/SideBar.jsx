import React from 'react';
import { NavLink } from 'react-router-dom';

export const SideBar = () => {
  return (
    <div className='shadow-sm border p-4 rounded-lg'>
      <ul className='nav flex-column'>
        <li className='nav-item mb-3'>
          <NavLink to='/profile'>Profile</NavLink>
        </li>
        <li className='nav-item mb-3'>
          <NavLink to='/questions'>Questions</NavLink>
        </li>

        <li className='nav-item'>
          <NavLink to='/sign-in'>Logout</NavLink>
        </li>
      </ul>
    </div>
  );
};
