import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo" style={{marginLeft: '20px'}}>Priyanka Negi</Link>
        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
        <ul className="side-nav" id="mobile-demo">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;