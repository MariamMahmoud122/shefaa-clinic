import React from "react";

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#000",    // خلفية سوداء
      color: "#fff",              // نص أبيض
      padding: "20px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      fontSize: "14px",
      borderTop: "2px solid #444"
    }}>
      <p style={{ margin: "5px 0" }}>© 2025 Medical Clinic. All rights reserved.</p>
      <p style={{ margin: "5px 0" }}>
        Designed and developed by <strong>Mariam Soliman</strong>, Software Engineer
      </p>
    </footer>
  );
}
