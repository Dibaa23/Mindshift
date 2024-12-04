import React from 'react';
import { useNavigate } from 'react-router-dom';

const InstructionsPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>How to Play</h2>
            <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>
Welcome to MindShift, an interactive game where you predict what AI believes is the correct answer to ethical dilemma questions!
</p>
            <p style={{ fontSize: '1rem', margin: '20px 0' }}>
                Each question has multiple-choice options. You will earn points for correct answers and additional time bonuses for answering quickly. Try to get the highest score possible!
            </p>
            <button
                onClick={() => navigate('/game-options')} // Navigate to the game options page
                style={{
                    marginTop: '20px',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                }}
            >
                Start Game
            </button>
        </div>
    );
};

export default InstructionsPage;
