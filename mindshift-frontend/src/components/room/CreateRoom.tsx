import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateRoom: React.FC = () => {
    const [roomName, setRoomName] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleCreateRoom = () => {
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
                Create Room
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
                    placeholder="Enter Room Name"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleCreateRoom()}
                    style={{
                        padding: '10px',
                        fontSize: '1rem',
                        width: '300px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        textAlign: 'center'
                    }}
                />
                <button
                    onClick={handleCreateRoom}
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
                    Enter
                </button>
            </div>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>Please enter a room name</p>}
        </div>
    );
};

export default CreateRoom;
