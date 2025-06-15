
import React from "react";

// Simple organic shape badge using SVG. Can expand with props if needed.
const OrganicBadge = ({
  text,
  color,
  className = "",
}: {
  text: string;
  color: string;
  className?: string;
}) => (
  <div className={className}>
    <svg width="130" height="70" viewBox="0 0 130 70" className="block" style={{ filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.04))" }}>
      <path
        d="M27 8 Q65 0, 105 19 Q128 38, 112 64 Q70 77, 20 58 Q1 38, 27 8Z"
        fill={color}
      />
    </svg>
    <span
      className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-65%] text-black font-bold text-[17px] whitespace-nowrap"
      style={{ fontFamily: "monospace" }}
    >
      {text}
    </span>
  </div>
);

export default OrganicBadge;
