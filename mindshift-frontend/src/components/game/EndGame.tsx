import React from 'react';
import './EndGame.css';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface LeaderboardEntry {
    name: string;
    score: number;
}

interface EndGameProps {
    totalPoints: number;
    correctAnswersCount: number;
    totalQuestions: number;
    leaderboard?: LeaderboardEntry[]; // Optional leaderboard prop
}

const EndGame: React.FC<EndGameProps> = ({
    totalPoints,
    correctAnswersCount,
    totalQuestions,
    leaderboard = [
        { name: 'Player 1', score: 1000 },
        { name: 'Player 2', score: 900 },
        { name: 'You', score: totalPoints },
        { name: 'Player 4', score: 0 },
        { name: 'Player 5', score: 0 },
    ],
}) => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '20px' }}>
    {/* Player's Score and Performance */}
    <div style={{ flex: 1, textAlign: 'left', marginRight: '20px' }}>
        <h2>Game Over</h2>
        <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>
            You scored <strong>{totalPoints}</strong> points
        </p>
        <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>
            <strong>{correctAnswersCount}</strong>/{totalQuestions} questions correct
        </p>
        <button
            onClick={() => navigate('/')}
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
            Go to Home
        </button>
    </div>

    {/* Leaderboard */}
    <div style={{ flex: 1 }}>
        <h3>Leaderboard</h3>
        <TableContainer component={Paper} className="leaderboard-table">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ fontWeight: 'bold', color: '#fff' }}>Player</TableCell>
                        <TableCell style={{ fontWeight: 'bold', color: '#fff' }} align="right">
                            Score
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {leaderboard.map((entry, index) => (
                        <TableRow key={index}>
                            <TableCell style={{ color: '#fff' }}>{entry.name}</TableCell>
                            <TableCell style={{ color: '#fff' }} align="right">{entry.score}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
            
        </div>
    );
};

export default EndGame;
