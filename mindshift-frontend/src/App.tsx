import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/room/HomeRoom';
import CreateRoom from './components/room/CreateRoom';
import JoinRoom from './components/room/JoinRoom';
import WaitingRoom from './components/room/WaitingRoom';
import ScenarioDisplay from './components/game/ScenarioDisplay';

const App: React.FC = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div>
            {isHomePage && <h1>Welcome to MindShift</h1>}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-room" element={<CreateRoom />} />
                <Route path="/join-room" element={<JoinRoom />} />
                <Route path="/waiting-room" element={<WaitingRoom />} />
                <Route path="/scenario" element={<ScenarioDisplay />} />
            </Routes>
        </div>
    );
};

export default App;
