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
        <div>
            <h2>Waiting Room</h2>
            <p>Welcome to the waiting room for "{roomName}"</p>
            <button onClick={handleStartScenario}>Start Scenario</button>
        </div>
    );
};

export default WaitingRoom;
