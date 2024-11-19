import React, { useState, useEffect } from 'react';

interface TimerProps {
    duration: number;
    onComplete: () => void;
}

const Timer: React.FC<TimerProps> = ({ duration, onComplete }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        if (timeLeft === 0) {
            onComplete();
            return;
        }

        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft, onComplete]);

    return <div>Time left: {timeLeft}s</div>;
};

export default Timer;
