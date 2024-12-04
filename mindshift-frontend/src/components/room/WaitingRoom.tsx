import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const WaitingRoom: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const roomName = location.state?.roomName || '';

    // If no room name is present, navigate back to create room page
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
                gap: '20px',
            }}
        >
            <h2
                style={{
                    fontSize: '2rem',
                    marginBottom: '10px',
                }}
            >
                Waiting Room
            </h2>
            
            <img
                src="/src/assets/Waiting Room.png" // Replace with the actual path to your image
                alt="Waiting Room Illustration"
                style={{
                    width: '500px',
                    height: 'auto',
                    borderRadius: '10px', // Optional for rounded corners
                }}
            />

            <p
                style={{
                    fontSize: '1.2rem',
                }}
            >
                Welcome to the waiting room for "{roomName}"
            </p>

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
