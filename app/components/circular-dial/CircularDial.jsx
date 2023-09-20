import React from 'react';

export default function CircularDial({ dialValue }) {
  // Calculate the rotation angle based on the dial value
  const rotationAngle = (dialValue / 100) * 360;

  // Define the dial's radius, stroke width, and center coordinates
  const radius = 80; // Increased radius for a bigger dial
  const strokeWidth = 15; // Increased stroke width
  const centerX = radius + strokeWidth;
  const centerY = radius + strokeWidth;

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mt-4">This Week</h2>
      <svg
        width={2 * (radius + strokeWidth)}
        height={2 * (radius + strokeWidth)}
        viewBox={`0 0 ${2 * (radius + strokeWidth)} ${2 * (radius + strokeWidth)}`}
        className="mt-4"
        style={{
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
          borderRadius: '50%', // Make it a perfect circle
        }}
      >
        {/* Define a gradient */}
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#f51711' }} />
            <stop offset="100%" style={{ stopColor: 'rgba(0,0,0,0)' }} />
          </linearGradient>
        </defs>

        {/* Background Circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          stroke="#f0f0f0" // Background color
        />

        {/* Progress Arc with Gradient */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          strokeWidth={strokeWidth}
          fill="transparent"
          stroke="url(#progressGradient)" // Apply the gradient here
          strokeDasharray={`${2 * Math.PI * radius}`}
          strokeDashoffset={`${2 * Math.PI * radius - (2 * Math.PI * radius * rotationAngle) / 360}`}
          transform={`rotate(-90 ${centerX} ${centerY})`}
        />

        {/* Dial Value */}
        <text x={centerX} y={centerY-10} textAnchor="middle" dy="0.3em" fontSize="32" fill="#333">
          {dialValue}%
        </text>
        <text x={centerX} y={centerY + 20} textAnchor="middle" dy="0.3em" fontSize="16" fill="#333">
            Negative
        </text>
      </svg>
    </div>
  );
}
