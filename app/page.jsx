import React from 'react';

export default function Home() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: '#f0f0f0', // Background color
  };

  const headingStyle = {
    fontSize: '6rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px', // Adjust as needed
    background: '-webkit-linear-gradient(45deg, #FF9A8B, #FF6A88, #FF476F)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '3px', // Adjust as needed
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.2)', // Text shadow
  };

  const taglineStyle = {
    fontSize: '1.8rem',
    textAlign: 'center',
    marginTop: '10px', // Adjust as needed
  };

  const teamNameStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '30px', // Adjust as needed
  };

  return (
    <div style={containerStyle}>
      <span className='text-gray-500 text-sm'>Temporary design</span>
      <h1 style={headingStyle}>News Sentinel</h1>
      <p style={taglineStyle}>Media Feedback Powered by AI</p>
      <p style={teamNameStyle}>TEAM GATIMAN</p>
    </div>
  );
}
