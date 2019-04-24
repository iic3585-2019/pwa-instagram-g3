import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <ul className="nav flex-column top-padded">
      <li>
        <NavLink to="/" className="nav-link active">
          Home
        </NavLink>
      </li>
      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>User</span>
      </h6>
      <li className="nav-item">
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/signup" className="nav-link">
          Signup
        </NavLink>
      </li>
    </ul>
  );
}
