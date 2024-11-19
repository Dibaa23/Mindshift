import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinRoom: React.FC = () => {
    const [roomName, setRoomName] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleJoinRoom = () => {
        if (roomName.trim() === '') {
            setError(true);
        } else {
            setError(false);
            navigate('/waiting-room', { state: { roomName } });
        }
    };

    return (
        <div>
            <h2>Join Room</h2>
            <input
                type="text"
                placeholder="Enter Room Name"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleJoinRoom()}
            />
            <button onClick={handleJoinRoom}>Enter</button>
            {error && <p style={{ color: 'red' }}>Please enter a room name</p>}
        </div>
    );
};

export default JoinRoom;
