import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import heroBg from "../assets/hero-bg.jpg"; // ✨ ضيفي صورة خلفية هنا

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
      }}
    >
      {/* 👇 Overlay رمادي شفاف */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)", // رمادي شفاف
          zIndex: 1,
        }}
      ></div>

      <Container style={{ position: "relative", zIndex: 2 }}>
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ fontWeight: "bold", fontSize: "3rem" }}
        >
          Welcome to <span style={{ color: "red" }}>SHEFAA</span> Clinic
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ fontSize: "18px", margin: "20px 0" }}
        >
          Providing professional healthcare services with care and trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Button
  variant="danger"
  size="lg"
  style={{ borderRadius: "30px", padding: "10px 30px" }}
  href="#booking"   // 🔥 يودّي لسكشن الحجز
>
  Book now!
</Button>
        </motion.div>
      </Container>
    </motion.div>
  );
}
