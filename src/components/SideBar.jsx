import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../actions";

export const SideBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="shadow-sm border p-4 rounded-lg">
      <ul className="nav flex-column">
        <li className="nav-item mb-3">
          <NavLink to="/admin">Admin</NavLink>
        </li>
        <li className="nav-item mb-3">
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className="nav-item mb-3">
          <NavLink to="/questions">Questions</NavLink>
        </li>

        <li className="nav-item" onClick={() => logOut(dispatch)}>
          <NavLink to="">Logout</NavLink>
        </li>
      </ul>
    </div>
  );
};
