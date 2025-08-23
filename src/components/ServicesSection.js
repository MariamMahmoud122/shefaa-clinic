import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { HeartPulse, Stethoscope, Syringe } from "lucide-react";

export default function ServicesSection() {
  const services = [
    { icon: <HeartPulse size={40} color="red" />, title: "Cardiology", desc: "Comprehensive heart care with modern equipment." },
    { icon: <Stethoscope size={40} color="red" />, title: "General Checkup", desc: "Regular health checkups for all ages." },
    { icon: <Syringe size={40} color="red" />, title: "Vaccinations", desc: "Safe and reliable vaccination services." },
  ];

  return (
    <div style={{ padding: "80px 0", backgroundColor: "#fff" }} id="services">
      <Container>
        <h2 className="text-center mb-5 fw-bold" style={{ color: "#000" }}>Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index}>
              <Card className="shadow-sm mb-4 text-center p-3 border-0">
                <div>{service.icon}</div>
                <Card.Body>
                  <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Text style={{ color: "#555" }}>{service.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
