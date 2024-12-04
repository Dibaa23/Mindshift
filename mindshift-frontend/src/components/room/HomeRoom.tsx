import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // Full viewport height
                textAlign: 'center',
                padding: '20px',
            }}
        >
            <h1>Welcome to MindShift 🧠</h1>

            <img
                src="/src/assets/Mindshift Logo.png" // replace with the correct path to your logo image
                alt="MindShift Logo"
                style={{
                    width: '600px', // Adjust the size as needed
                    height: '600px',
                }}
            />

            <div style={{ marginTop: '20px' }}>
                <button
                    onClick={() => navigate('/instructions')}
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
                    How to Play
                </button>
                <button
                    onClick={() => navigate('/game-options')}
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
                    Play Game
                </button>
            </div>
        </div>
    );
};

export default Home;
