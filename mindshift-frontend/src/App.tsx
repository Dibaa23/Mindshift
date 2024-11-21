import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'; // Import the CSS file
import Home from './components/room/HomeRoom';
import CreateRoom from './components/room/CreateRoom';
import JoinRoom from './components/room/JoinRoom';
import WaitingRoom from './components/room/WaitingRoom';
import ScenarioDisplay from './components/game/ScenarioDisplay';
import InstructionsPage from './components/game/InstructionsPage';
import GameOptions from './components/room/GameOptions';

const App: React.FC = () => {
    return (
        <div id="app-container"> {/* Use a consistent ID or class */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/instructions" element={<InstructionsPage />} />
                <Route path="/game-options" element={<GameOptions />} />
                <Route path="/create-room" element={<CreateRoom />} />
                <Route path="/join-room" element={<JoinRoom />} />
                <Route path="/waiting-room" element={<WaitingRoom />} />
                <Route path="/scenario" element={<ScenarioDisplay />} />
            </Routes>
        </div>
    );
};

export default App;
