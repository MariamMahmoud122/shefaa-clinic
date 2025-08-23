import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function BookingForm() {
  return (
    <div style={{ padding: "80px 0", backgroundColor: "#fff" }} id="booking">
      <Container style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#000" }}>Book an Appointment</h2>
        <Form className="shadow p-4 rounded bg-light">
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Preferred Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Button variant="danger" type="submit" className="w-100">
            Book Now
          </Button>
        </Form>
      </Container>
    </div>
  );
}
