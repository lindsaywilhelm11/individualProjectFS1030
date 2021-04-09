import React from 'react';
import { Link } from 'react-router-dom';
 
function Navigation() {
   const navStyle = {
      color: '#1a1c20'
   };

    return (
       <div>
          <ul className='navLink'>
          <Link className="navbar" style={navStyle} to="/">Home</Link>
          <Link className="navbar" style={navStyle} to="/about">About</Link>
          <Link className="navbar" style={navStyle} to="/portfolio">Portfolio</Link>
          <Link className="navbar" style={navStyle} to="/resume">Resume</Link>
          <Link className="navbar" style={navStyle} to="/contact">Contact</Link>
          <Link className="navbar" style={navStyle} to="/login">Login</Link>
          </ul>
       </div>
    );
}
 
export default Navigation;