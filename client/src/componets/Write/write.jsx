import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaBold, FaItalic, FaUnderline, FaQuoteRight } from 'react-icons/fa';

const Write = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');

  const handlePublish = async () => {
    const token = localStorage.getItem("token"); // JWT for auth if needed

    try {
      const res = await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` })
        },
        body: JSON.stringify({ title, subtitle, content })
      });

      const data = await res.json();
      if (res.ok) {
        alert("Blog published successfully!");
        setTitle("");
        setSubtitle("");
        setContent("");
      } else {
        alert("Failed to publish blog: " + data.error);
      }
    } catch (err) {
      alert("Error connecting to server");
    }
  };

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <Container className="pt-5">
        <h1 className="fw-bold" style={{ fontSize: '2.5rem', color: '#333' }}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-0 w-100 fw-light"
            style={{ fontSize: '2.5rem', outline: 'none' }}
          />
        </h1>
        <p className="mb-4 text-muted">
          <input
            type="text"
            placeholder="Blog sphere"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="border-0 w-100"
            style={{ fontSize: '1.25rem', outline: 'none' }}
          />
        </p>

        {/* Editor Toolbar */}
        <div className="d-flex gap-3 my-3 border p-2 rounded bg-light">
          <Button variant="outline-dark" size="sm"><FaBold /></Button>
          <Button variant="outline-dark" size="sm"><FaItalic /></Button>
          <Button variant="outline-dark" size="sm"><FaUnderline /></Button>
          <Button variant="outline-dark" size="sm"><FaQuoteRight /></Button>
        </div>

        {/* Content Area */}
        <Form.Control
          as="textarea"
          rows={12}
          placeholder="Start writing here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border-0"
          style={{
            resize: 'none',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            padding: '10px',
            background: '#fefefe',
            outline: 'none',
            boxShadow: 'none'
          }}
        />

        {/* Publish Button */}
        <div className="text-end mt-4 text-center">
          <Button variant="success" onClick={handlePublish}>
            Publish
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Write;
