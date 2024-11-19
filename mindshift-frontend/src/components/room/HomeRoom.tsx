import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Welcome to the Game App</h2>
            <div>
                <button onClick={() => navigate('/create-room')}>Create Room</button>
                <button onClick={() => navigate('/join-room')}>Join Room</button>
            </div>
        </div>
    );
};

export default Home;