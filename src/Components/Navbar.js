import { Link } from 'react-router-dom';
import logo from '../planet.png';
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
          <Link className="nav--links" to="/">Rockets</Link>
        </li>
        <li>
          <Link className="nav--links" to="/Missions">Missions</Link>
        </li>
        <li>
          <Link className="nav--links" to="/profile">My Profile</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
