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
                boxSizing: 'border-box', // Ensures padding doesn't affect height
                overflow: 'hidden', // Prevents scrollbars
            }}
        >
            <h1
                style={{
                    marginTop: '20px', // Add margin to top of the header
                    fontSize: '2.5rem', // Adjust font size for better visibility
                }}
            >
                Welcome to MindShift 🧠
            </h1>

            <img
                src="/Mindshift Logo.png" // Replace with the correct path to your logo image
                alt="MindShift Logo"
                style={{
                    width: '300px', // Reduced width
                    height: '300px', // Reduced height
                    marginTop: '20px', // Add margin above the logo
                }}
            />

            <div style={{ marginTop: '30px' }}>
                <button
                    onClick={() => navigate('/instructions')}
                    style={{
                        marginRight: '15px', // Add spacing between buttons
                        backgroundColor: '#007BFF',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '1.1rem', // Slightly larger font
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
                        fontSize: '1.1rem', // Slightly larger font
                    }}
                >
                    Play Game
                </button>
            </div>
        </div>
    );
};

export default Home;
