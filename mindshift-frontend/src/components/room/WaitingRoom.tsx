import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const WaitingRoom: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const roomName = location.state?.roomName || '';

    // Redirect to create room page if no room name is provided
    if (!roomName) {
        navigate('/create-room');
        return null; // Prevent rendering if redirected
    }

    const handleStartScenario = () => {
        navigate('/scenario', { state: { roomName } });
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                textAlign: 'center',
                padding: '20px',
                gap: '20px',
            }}
        >
            {/* Title with top margin */}
            <h2
                style={{
                    fontSize: '2rem',
                    marginTop: '40px',
                    marginBottom: '20px',
                }}
            >
                Waiting Room
            </h2>

            {/* Waiting Room Image */}
            <img
                src="/Waiting Room.png" // Ensure the image is in the public directory
                alt="Waiting Room Illustration"
                style={{
                    width: '300px', // Resized for a smaller display
                    height: 'auto',
                    borderRadius: '10px', // Optional rounded corners
                }}
            />

            {/* Waiting Room Text */}
            <p
                style={{
                    fontSize: '1.2rem',
                }}
            >
                Welcome to the waiting room for "{roomName}"
            </p>

            {/* Start Scenario Button */}
            <button
                onClick={handleStartScenario}
                style={{
                    padding: '10px 20px',
                    fontSize: '1rem',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Start Scenario
            </button>
        </div>
    );
};

export default WaitingRoom;
