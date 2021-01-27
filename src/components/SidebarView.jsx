import React from 'react';
import { NavLink } from 'react-router-dom';

export const SidebarView = () => {
  return (
    <div className='shadow-sm border p-4 rounded-lg'>
      <ul className='nav flex-column'>
        <li className='nav-item mb-3'>
          <NavLink to='/'>Profile View</NavLink>
        </li>
        <li className='nav-item mb-3'>
          <NavLink to='/questions-view'>Questions View</NavLink>
        </li>

        {/* <li className='nav-item'>
          <NavLink to='/sign-in'>Logout</NavLink>
        </li> */}
      </ul>
    </div>
  );
};
