// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/appliedJobs">Applied Jobs</Link>
      <Link to="/statistics">Statistics</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
};

export default Navbar;