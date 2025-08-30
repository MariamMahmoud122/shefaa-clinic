import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa"; // ⭐ أيقونات النجوم

export default function TestimonialsSection() {
  const testimonials = [
    { name: "Ahmed Omar", text: "Excellent service and very friendly staff!", rating: 5 },
    { name: "Sara Mohamed", text: "Doctors are professional and caring. Highly recommend.", rating: 4 },
    { name: "Omar Ali", text: "Quick booking process and clean environment.", rating: 5 },
  ];

  // ✅ دالة تقليدية بترجع JSX لكل testimonial
  function renderTestimonials() {
    let items = [];
    for (let i = 0; i < testimonials.length; i++) {
      const t = testimonials[i];
      items.push(
        <Col md={4} key={i}>
          <Card className="shadow-sm mb-4 border-0">
            <Card.Body>
              <Card.Text style={{ color: "#555" }}>"{t.text}"</Card.Text>

              {/* ⭐ عرض النجوم */}
              <div style={{ color: "#f1c40f", margin: "10px 0" }}>
                {Array(t.rating).fill(0).map((_, j) => (
                  <FaStar key={j} />
                ))}
              </div>

              <h6 className="fw-bold text-danger">- {t.name}</h6>
            </Card.Body>
          </Card>
        </Col>
      );
    }
    return items;
  }

  return (
    <div style={{ padding: "80px 0", backgroundColor: "#f5f5f5" }} id="testimonials">
      <Container>
        <h2 className="text-center mb-5 fw-bold" style={{ color: "#000" }}>
          What Our Patients Say
        </h2>
        <Row>{renderTestimonials()}</Row>
      </Container>
    </div>
  );
}
