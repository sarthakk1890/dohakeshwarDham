import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.scss';
import logo from '../assets/logo.png';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleHandler = () => {
    setMenuOpen((previous) => !previous)
  }

  return (
    <nav className="navbar-main">
      <Link to="/" className="logo">
        <img src={logo} alt="डोहकेश्वर धाम" />
      </Link>

      <div className="menu" onClick={() => toggleHandler()}>
        { menuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li className="navbar-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/history">History</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/events">Events</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/services">Services</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
