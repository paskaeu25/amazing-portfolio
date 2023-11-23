import './Nav.css';

// Router Dom Import
import { NavLink } from 'react-router-dom';

// Fontawesome Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Data Import
import { navLinks } from '../../data/Data';

export default function Nav() {
  return (
    <nav>
      <ul className="navlinks">
        {navLinks.map(({ id, name, icon, path }) => {
          return (
            <li className="nav-item" key={id}>
              <NavLink to={path} className={'nav-link'}>
                <span>
                  <FontAwesomeIcon icon={icon} />
                </span>
                <h3>{name}</h3>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="nav-close">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
