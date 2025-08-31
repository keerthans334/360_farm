import React from "react";
import "../styles/GlassCard.css";

export default function TranslucentButton({ children, ...props }) {
  return (
    <button
      className="glass-card translucent-btn"
      {...props}
    >
      {children}
    </button>
  );
}