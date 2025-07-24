import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import meming from '../../assets/meming.webp';
import backg from '../../assets/backg.jpeg';

const Membership = () => {
  return (
    <div>
      {/* HEADER SECTION */}
      {/* HEADER SECTION */}
<Container fluid className="py-5 border-bottom bg-light">
  <Row>
    {/* LEFT SIDE WITH BACKGROUND IMAGE */}
    <Col
      md={6}
      className="d-flex flex-column justify-content-center px-5 text-white"
      style={{
        backgroundImage: `url(${backg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100%', // ensures full height alignment
      }}
    >
      {/* Optional: overlay for better readability */}
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '2rem' }}>
        <h1 className="display-4 fw-bold">Support human stories</h1>
        <p>
          Become a member to read without limits or ads, fund great writers, and join a global
          community of people who care about high-quality storytelling.
        </p>
        <div className="d-flex gap-3">
          <Button variant="light" className="text-dark fw-bold">Get started</Button>
          <Button variant="outline-light">View plans</Button>
        </div>
      </div>
    </Col>

    {/* RIGHT SIDE WITH PLAIN LIGHT BACKGROUND */}
    <Col md={6} className="bg-light text-dark">
      <img
        src={meming}
        alt="Story Image"
        className="img-fluid rounded"
      />
      <div className="mt-3">
        <span className="badge bg-warning text-dark mb-2">★ Member-only story</span>
        <h5 className="text-muted">
          How Starting an Investment Firm Almost Landed Me in a Federal Prison
        </h5>
        <small className="text-muted">
          Marlon Weems — Host of <i>The Journeyman Unfiltered</i>
        </small>
      </div>
    </Col>
  </Row>
</Container>



      {/* WHY MEMBERSHIP SECTION */}
      <Container className="py-5">
        <Row>
          <Col md={6}>
            <h2 className="display-6">Why membership?</h2>
          </Col>
          <Col md={6}>
            <h4>Reward writers</h4>
            <p>Your membership directly supports the writers, editors, curators, and teams who make Medium a vibrant, inclusive home for human stories.</p>

            <h4>Unlock every story</h4>
            <p>Get access to millions of original stories that spark bright ideas, answer big questions, and fuel bold ambitions.</p>

            <h4>Enhance your reading experience</h4>
            <p>Immerse yourself in audio stories, read offline wherever you go, and connect with the Medium community on Mastodon.</p>

            <h4>Elevate your writing</h4>
            <p>Create and contribute to publications, collaborate with other writers, and level up your writing with powerful publishing tools.</p>

            <h4>Support a mission that matters</h4>
            <p>Members are creating a world where original, human-crafted stories thrive. Quality comes first—not ads or clickbait.</p>
          </Col>
        </Row>
      </Container>

      {/* TESTIMONIAL SECTION */}
      <Container className="py-5 border-top">
        <Row>
          <Col md={6}>
            <h3 className="display-6">What members are saying</h3>
          </Col>
          <Col md={6}>
            <div className="d-flex align-items-start">
              <img
                src="https://via.placeholder.com/60"
                alt="Member"
                className="rounded-circle me-3 mt-1"
              />
              <p>
                The easy path in social media is promoting the worst content... That’s not what you get on Medium.
                <br />
                <strong>Cassie Kozyrkov</strong>, Chief Decision Scientist at Google and Medium member
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* MEMBERSHIP PLANS */}
      <Container className="py-5">
        <h2 className="mb-4">Membership plans</h2>
        <Row className="g-4">
          <Col md={6}>
            <Card className="h-100">
              <Card.Body>
                <h4>🌟 Medium Member</h4>
                <p className="text-muted">$5/month or $50/year</p>
                <Button variant="success" className="mb-3">Get started</Button>
                <ul>
                  <li>✔️ Read member-only stories</li>
                  <li>✔️ Support writers you read most</li>
                  <li>✔️ Earn money for your writing</li>
                  <li>✔️ Listen to audio narrations</li>
                  <li>✔️ Read offline with the Medium app</li>
                  <li>✔️ Access our Mastodon community</li>
                  <li>✔️ Connect your custom domain</li>
                  <li>✔️ Create your own publications</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100">
              <Card.Body>
                <h4>🛡️ Friend of Medium</h4>
                <p className="text-muted">$15/month or $150/year</p>
                <Button variant="success" className="mb-3">Get started</Button>
                <ul>
                  <li>✔️ All Medium member benefits</li>
                  <li>✔️ Give 4x more to the writers you read</li>
                  <li>✔️ Share member-only stories with anyone</li>
                  <li>✔️ Customize app icon</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* FOOTER SECTION */}
      <Container fluid className="bg-light text-center py-5 border-top">
        <h2 className="display-6 mb-3">Unlock a world of wisdom</h2>
        <Button variant="dark">Get started</Button>
        <p className="mt-4 text-muted small">
          <a href="/">About</a> · <a href="/">Terms</a> · <a href="/">Privacy</a> · <a href="/">Help</a> · <a href="/">Teams</a> · <a href="/">Press</a>
        </p>
      </Container>
    </div>
  );
};

export default Membership;
