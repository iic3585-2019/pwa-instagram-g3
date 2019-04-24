import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <ul className="nav flex-column top-padded">
      <li>
        <NavLink to="/" className="nav-link active">
          Inicio
        </NavLink>
      </li>
      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>Información</span>
      </h6>
      <li className="nav-item">
        <NavLink to="/messages" className="nav-link">
          Librería
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/messages" className="nav-link">
          Soporte
        </NavLink>
      </li>
    </ul>
  );
}
