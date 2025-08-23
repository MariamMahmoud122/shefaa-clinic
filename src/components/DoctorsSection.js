import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import doc1 from "../assets/doc1.png"; // الطبيبة بالنظارة
import doc2 from "../assets/doc2.png"; // الدكتور بلوحة التسجيل
import doc3 from "../assets/doc3.png"; // الدكتور المبتسم

export default function DoctorsSection() {
  const doctors = [
    { img: doc1, name: "Dr. Sara Mahmoud", specialty: "General Practitioner" },
    { img: doc2, name: "Dr. Ahmed Ali", specialty: "Internal Medicine" },
    { img: doc3, name: "Dr. Omar Khaled", specialty: "Pediatrician" },
  ];

  return (
    <div style={{ padding: "80px 0", backgroundColor: "#fff" }} id="doctors">
      <Container>
        <h2 className="text-center mb-5 fw-bold" style={{ color: "#000" }}>
          Meet Our Doctors
        </h2>
        <Row>
          {doctors.map((doc, index) => (
            <Col md={4} key={index}>
              <Card className="shadow-sm mb-4 text-center border-0">
                <Card.Img
                  variant="top"
                  src={doc.img}
                  alt={doc.name}
                  style={{
                    width: "220px",
                    height: "220px",
                    objectFit: "contain",
                    margin: "20px auto",
                  }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{doc.name}</Card.Title>
                  <Card.Text style={{ color: "#555" }}>
                    {doc.specialty}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
