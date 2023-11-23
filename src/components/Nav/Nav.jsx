import './Nav.css';

// Router Dom Import
import { NavLink } from 'react-router-dom';

// Fontawesome Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Data Import
import { navLinks } from '../../data/Data';

// Use State Import
import { useState } from 'react';

export default function Nav() {
  return (
    <nav>
      <ul className="navlinks">
        {navLinks.map(({ id, name, icon, path }) => {
          return (
            <li className="nav-item" key={id}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? 'nav-link navlinksActive' : 'nav-link'
                }
              >
                <span>
                  <FontAwesomeIcon icon={icon} />
                </span>
                <h3>{name}</h3>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="nav-toggle ">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
