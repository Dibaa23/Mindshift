import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameOptions: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Choose an Option</h2>
            <div style={{ marginTop: '20px' }}>
                <button
                    onClick={() => navigate('/create-room')}
                    style={{
                        marginRight: '10px',
                        backgroundColor: '#007BFF',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '1rem',
                    }}
                >
                    Create Room
                </button>
                <button
                    onClick={() => navigate('/join-room')}
                    style={{
                        backgroundColor: '#28A745',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '1rem',
                    }}
                >
                    Join Room
                </button>
            </div>
        </div>
    );
};

export default GameOptions;
