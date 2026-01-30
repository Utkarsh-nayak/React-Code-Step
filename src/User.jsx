import React from "react";

const User = ({ user }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        width: "260px",
        fontFamily: "sans-serif",
        transition: "0.3s",
      }}
    >
      <h2 style={{ marginBottom: "15px", color: "#333" }}>👤 User Profile</h2>

      <p style={{ margin: "8px 0", color: "#555" }}>
        <strong>Name:</strong> {user.name}
      </p>

      <p style={{ margin: "8px 0", color: "#555" }}>
        <strong>Age:</strong> {user.age}
      </p>

      <p style={{ margin: "8px 0", color: "#555" }}>
        <strong>Email:</strong> {user.gmail}
      </p>
    </div>
  );
};

export default User;
