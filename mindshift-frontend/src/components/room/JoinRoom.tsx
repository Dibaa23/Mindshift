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
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <h2
                style={{
                    marginBottom: '10px',
                }}
            >
                Join Room
            </h2>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                }}
            >
                <input
                    type="text"
                    placeholder="Enter Room Code"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleJoinRoom()}
                    style={{
                        padding: '10px',
                        fontSize: '1rem',
                        width: '300px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        textAlign: 'center',
                    }}
                />
                <button
                    onClick={handleJoinRoom}
                    style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        backgroundColor: '#28A745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Join
                </button>
            </div>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>Please enter a valid room code</p>}
        </div>
    );
};

export default JoinRoom;
