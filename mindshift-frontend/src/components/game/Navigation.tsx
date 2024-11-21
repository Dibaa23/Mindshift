import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/instructions">Instructions</Link></li>
                <li><Link to="/create-room">Create Room</Link></li>
                <li><Link to="/join-room">Join Room</Link></li>
                <li><Link to="/waiting-room">Waiting Room</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
