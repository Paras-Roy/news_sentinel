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

    <div className='flex-[4] bg-white rounded-2xl gap-5 flex flex-col no-scrollbar h-full overflow-y-scroll'>
      <main className="flex w-full mt-0 flex-col items-center min-h-screen">
        <div className="flex flex-col tran items-center min-h-screen w-full" style={{ backgroundImage: 'url(home-main.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="text-center">
            <h1 className="text-7xl mt-32 font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-700 to-green-800">Monitor Success of Nudges.</h1>
            {/* <p className="mt-4 text-xl text-black">AI powered analysis of trends and feedback of environmental indicators.</p> */}
          </div>
        </div>
      </main>
    </div>
  );
}
