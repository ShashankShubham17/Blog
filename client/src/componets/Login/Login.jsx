// File: Login.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import images from "../../assets/image.png"; // Optional image

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save token and user to localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Navigate to homepage
        navigate("/Mediumhomepage");
      } else {
        alert(data.error || "❌ Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("❌ Something went wrong");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow border-0" style={{ maxWidth: "900px", width: "100%" }}>
        <div className="row g-0">
          {/* Left Image Section */}
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
            <img
              src={images}
              alt="Login Illustration"
              className="img-fluid rounded-start"
              style={{ objectFit: "cover", width: "90%", height: "100%" }}
            />
          </div>

          {/* Right Form Section */}
          <div className="col-md-6 p-5">
            <h3 className="mb-4 text-center fw-bold">Login to Your Account</h3>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="d-grid mb-3">
                <button type="submit" className="btn btn-success">
                  Log In
                </button>
              </div>
            </form>

            <p className="text-center text-muted mt-3">
              Don't have an account?{" "}
              <Link to="/signup" className="text-decoration-none">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
