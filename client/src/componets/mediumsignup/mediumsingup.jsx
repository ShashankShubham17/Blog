import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../../assets/book.png'; // make sure path is correct

const MediumSignup = () => {
  const [name, setName] = useState("");
  const email = "your-email@example.com"; // Replace with actual logic or prop

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Account created for ${name}`);
  };

  return (
    <div
      className="vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      {/* Overlay for blur effect */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backdropFilter: 'blur(0px)',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          zIndex: 0,
        }}
      ></div>

      {/* Signup Form */}
      <div
        className="card p-4 shadow-lg"
        style={{
          width: '100%',
          maxWidth: '450px',
          zIndex: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '12px',
        }}
      >
        <h1 className="fw-bold text-center mb-3">Medium</h1>

        <h4 className="text-center mb-2">Welcome to Medium!</h4>
        <p className="text-center text-muted mb-4">
          We need a little more information to finish creating your account.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your full name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <p className="mb-3">Your email is <strong>{email}</strong></p>

          <button type="submit" className="btn btn-dark w-100">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default MediumSignup;
