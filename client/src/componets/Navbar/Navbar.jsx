// src/componets/Navbar/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [location.pathname]); // Re-check on route change

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-3">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">Blog Sphere</Link>
        <div className="d-flex align-items-center ms-auto">
          <Link to="/ourstory" className="nav-link px-3 text-dark">Our Story</Link>
          <Link to="/Membership" className="nav-link px-3 text-dark">Membership</Link>
          <Link to="/Mediumhomepage" className="nav-link px-3 text-dark">MediumHomepage</Link>
          <Link to="/Write" className="nav-link px-3 text-dark">Write</Link>

          {!isLoggedIn ? (
            <>
              <Link to="/SignUp" className="nav-link px-3 text-dark">Sign Up</Link>
              <Link to="/login" className="btn btn-dark rounded-pill ms-3">Login</Link>
            </>
          ) : (
            <button className="btn btn-outline-danger rounded-pill ms-3" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
