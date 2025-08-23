import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function TestimonialsSection() {
  const testimonials = [
    { name: "Ahmed Ali", text: "Excellent service and very friendly staff!" },
    { name: "Sara Mohamed", text: "Doctors are professional and caring. Highly recommend." },
    { name: "Omar Khaled", text: "Quick booking process and clean environment." },
  ];

  return (
    <div style={{ padding: "80px 0", backgroundColor: "#f5f5f5" }} id="testimonials">
      <Container>
        <h2 className="text-center mb-5 fw-bold" style={{ color: "#000" }}>What Our Patients Say</h2>
        <Row>
          {testimonials.map((t, index) => (
            <Col md={4} key={index}>
              <Card className="shadow-sm mb-4 border-0">
                <Card.Body>
                  <Card.Text style={{ color: "#555" }}>"{t.text}"</Card.Text>
                  <h6 className="fw-bold text-danger">- {t.name}</h6>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
