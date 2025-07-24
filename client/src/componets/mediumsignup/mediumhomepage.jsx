import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col, Nav, Button,
  Card, InputGroup, FormControl
} from 'react-bootstrap';
import homebg from '../../assets/homebg.mp4';
import './mediumhomepage.css';

const sidebarArticles = [
  { title: "After 28 Years, I Finally Met My Long-lost Siblings", author: "Charles Amemiya", date: "May 8" },
  { title: "How to save bureaucracy from itself", author: "James Plunkett", date: "Jul 11" },
  { title: "Discovering that You Are Whole", author: "Deepak Chopra", date: "5d ago" },
];

const MediumHomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/blogs");
        setArticles(res.data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="video-background-wrapper">
      {/* VIDEO BACKGROUND */}
      <video autoPlay loop muted playsInline className="video-background">
        <source src={homebg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* MAIN PAGE CONTENT */}
      <div className="text-dark position-relative" style={{ zIndex: 1, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        {/* NAVIGATION */}
        <Container fluid className="border-bottom py-2">
          <Row className="align-items-center px-3">
            <Col md={6}>
              <InputGroup>
                <FormControl placeholder="Search" />
              </InputGroup>
            </Col>
            <Col md={4} className="text-end d-flex justify-content-end align-items-center gap-3">
              <i className="bi bi-bell fs-5"></i>
            </Col>
          </Row>
        </Container>

        {/* TABS */}
        <Container className="pt-4">
          <Nav variant="tabs" defaultActiveKey="foryou" className="mb-4">
            <Nav.Item><Nav.Link eventKey="foryou">For you</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="following">Following</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="featured">Featured</Nav.Link></Nav.Item>
          </Nav>

          {/* MAIN CONTENT */}
          <Row>
            {/* ARTICLES */}
            <Col md={8}>
              {loading ? (
                <p className="text-muted">Loading blogs...</p>
              ) : articles.length === 0 ? (
                <p className="text-muted">No blogs found.</p>
              ) : (
                articles.map((article, index) => (
                  <Row key={index} className="mb-4">
                    <Col xs={9}>
                      <h5 className="fw-bold text-dark">{article.title}</h5>
                      <p className="text-muted mb-1">{article.subtitle || "No subtitle"}</p>
                      <small className="text-secondary">
                        {(article.createdAt
                          ? new Date(article.createdAt).toLocaleDateString()
                          : "Unknown date")} · 💬 0
                      </small>
                      <p className="mt-2 text-dark">
                        {article.content?.substring(0, 150) || "No content"}...
                      </p>
                    </Col>
                    <Col xs={3}>
                      <div className="bg-light rounded" style={{ width: '100%', height: '100px' }} />
                    </Col>
                  </Row>
                ))
              )}
            </Col>

            {/* SIDEBAR */}
            <Col md={4}>
              <h6 className="fw-bold text-dark">Staff Picks</h6>
              {sidebarArticles.map((item, i) => (
                <div key={i} className="mb-3">
                  <p className="mb-1 fw-semibold text-dark">{item.title}</p>
                  <small className="text-muted">{item.date} — {item.author}</small>
                </div>
              ))}
              <hr />

              <Card className="bg-light mb-3">
                <Card.Body>
                  <Card.Title className="fs-6 text-dark">Writing on Medium</Card.Title>
                  <ul className="list-unstyled small text-dark">
                    <li>✅ New writer FAQ</li>
                    <li>✅ Expert writing advice</li>
                    <li>✅ Grow your readership</li>
                  </ul>
                  <Button size="sm" variant="dark">Start writing</Button>
                </Card.Body>
              </Card>

              <h6 className="fw-bold text-dark">Recommended topics</h6>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {['Programming', 'Writing', 'Self Improvement', 'Data Science', 'Technology'].map((tag, idx) => (
                  <Button key={idx} size="sm" variant="outline-secondary">{tag}</Button>
                ))}
              </div>

              <h6 className="fw-bold text-dark">Who to follow</h6>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div>
                  <strong>Grant H Brenner MD</strong>
                  <p className="small text-muted mb-0">Psychiatrist, Psychoanalyst</p>
                </div>
                <Button size="sm" variant="outline-dark">Follow</Button>
              </div>

              <div className="d-flex align-items-center justify-content-between mb-2">
                <div>
                  <strong>The Belladonna Comedy</strong>
                  <p className="small text-muted mb-0">Comedy publication</p>
                </div>
                <Button size="sm" variant="outline-dark">Follow</Button>
              </div>
            </Col>
          </Row>
        </Container>

        {/* FOOTER */}
        <Container fluid className="text-center border-top py-4 mt-5">
          <p className="text-muted small mb-1">© 2025 Medium Clone — Built with React + Bootstrap</p>
          <p className="text-muted small">About · Terms · Privacy · Help · Careers</p>
        </Container>
      </div>
    </div>
  );
};

export default MediumHomePage;
