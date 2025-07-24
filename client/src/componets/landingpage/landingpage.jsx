import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Limg from '../../assets/Limg.png';

const LandingPage = () => {
  const isLoggedIn = localStorage.getItem("token"); // ✅ Check if user is logged in

  return (
    <div className="landing-container bg-light text-dark">
      {/* Hero Section */}
      <section className="hero-section container py-5 my-5">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="display-4 fw-bold lh-sm">
              Empowering Writers to Share, <br /> Engage & Inspire  
            </h2>
            <p className="lead text-muted mt-3">
              BlogSphere is a vibrant platform for creators and readers where anyone can craft blogs, build
              followings, and share ideas with the world. Whether personal musings or professional insights,
              the platform ensures a simple, engaging, and powerful way to publish and interact.
            </p>

            <Link
              to={isLoggedIn ? "/Mediumhomepage" : "/SignUp"}
              className="btn btn-dark btn-lg rounded-pill mt-4"
            >
              Start Reading
            </Link>
          </div>

          {/* Image */}
          <div className="col-lg-6 text-center">
            <img
              src={Limg}
              alt="Landing visual"
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;