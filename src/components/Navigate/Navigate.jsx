import { NavLink } from 'react-router-dom';
import './Navigate.css';
export default function Navigate() {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <NavLink
            exact
            className="NavItem"
            activeClassName="NavItemActive"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="NavItem"
            activeClassName="NavItemActive"
            to="/movies"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
