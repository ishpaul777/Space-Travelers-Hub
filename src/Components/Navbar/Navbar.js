import { NavLink } from 'react-router-dom';
import logo from './planet.png';
import './Styles/Navbar.css';

const Navbar = () => (
  <nav className="nav--bar">
    <div className="nav--container flex">
      <div className="logo--container flex">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="logo--text">Space Travelers&apos; Hub</h1>
      </div>
      <ul className="navlinks--container flex">
        <li>
          <NavLink className="nav--links" to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink className="nav--links" to="/Missions">Missions</NavLink>
        </li>
        <li>
          <NavLink className="nav--links" to="/profile">My Profile</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
