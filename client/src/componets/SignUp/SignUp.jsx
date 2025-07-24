// File: SignUp.jsx
import React, { useState } from "react";
import images from "../../assets/image.png";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // Just redirect, no alert
      navigate("/login");
    } else {
      alert(data.error || "❌ Registration failed");
    }
  } catch (err) {
    console.error("Registration error:", err);
    alert("❌ Something went wrong. Please try again.");
  }
};


  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-md border-0" style={{ maxWidth: "900px", width: "100%" }}>
        <div className="row g-0">

          {/* Image Section */}
          <div className="col-md-6 d-none d-md-block text-center">
            <img
              src={images}
              alt="Sign Up Illustration"
              className="img-fluid h-100 rounded-start"
              style={{ objectFit: "cover", width: "80%" }}
            />
          </div>

          {/* Form Section */}
          <div className="col-md-6 p-5">
            <h3 className="mb-4 text-center fw-bold">Create Your Account</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>

            <p className="text-center mt-3 text-muted">
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none">
                Login
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
