import React, { useState, useEffect } from 'react';
import questionsData from '../../assets/questions.json';
import EndGame from './EndGame';


interface Question {
    Question: string;
    AnswerChoices: string[];
    CorrectAnswer: number;
    Points: number; // Added points field
}

const ScenarioDisplay: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(60);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [totalPoints, setTotalPoints] = useState(0); // Track total points
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [pointsEarned, setPointsEarned] = useState<number | null>(null); // Points earned for current question
    const [showPointsOverlay, setShowPointsOverlay] = useState(false); // Show points animation

    const questions: Question[] = questionsData.questions;

    useEffect(() => {
        if (timeLeft <= 0) {
            handleTimeUp();
            return;
        }

        const timerId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft]);

    const handleSubmit = () => {
        setTimeLeft(0);
    };

    const handleTimeUp = () => {
        let earnedPoints = 0;
    
        if (selectedAnswer === questions[currentQuestionIndex].CorrectAnswer) {
            // Base points for correct answer
            earnedPoints = questions[currentQuestionIndex].Points;
    
            // Add a time bonus (e.g., 10 points for every 10 seconds left)
            earnedPoints += Math.floor(timeLeft / 10) * 10;
    
            // Increment correct answers count
            setCorrectAnswersCount((prevCount) => prevCount + 1);
        }
    
        // Update total points and show overlay
        setTotalPoints((prevPoints) => prevPoints + earnedPoints);
        setPointsEarned(earnedPoints);
        setShowPointsOverlay(true);
        setShowCorrectAnswer(true); // Show the correct answer
    
        // Hide the points overlay and move to the next question
        setTimeout(() => {
            setShowPointsOverlay(false);
            goToNextQuestion();
        }, 2000);
    };
    
    
    const handleAnswerSelect = (index: number) => {
        setSelectedAnswer(index);
    };

    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimeLeft(60);
            setSelectedAnswer(null);
            setShowCorrectAnswer(false);
        } else {
            setQuizCompleted(true);
        }
    };

    if (quizCompleted) {
        return (
            <EndGame
                totalPoints={totalPoints}
                correctAnswersCount={correctAnswersCount}
                totalQuestions={questions.length}
            />
        );
    }
    
    

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div style={{ position: 'relative', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                {/* Question number on the left */}
                <h2 style={{ margin: 0 }}>Question {currentQuestionIndex + 1}</h2>

                {/* Total points in the center */}
                <h3 style={{ margin: 0 }}>Total Points: {totalPoints}</h3>

                {/* Time remaining on the right */}
                <div>Time left: {timeLeft} seconds</div>
            </div>


            {/* Points overlay */}
            {showPointsOverlay && (
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                        zIndex: 1000,
                        textAlign: 'center',
                    }}
                >
                    <h3>+{pointsEarned || 0} Points</h3>
                </div>
            )}

            {/* Question */}
            <div>
                <h3>{currentQuestion.Question}</h3>
            </div>

            {/* Answer choices */}
            <div style={{ marginTop: '20px' }}>
            {currentQuestion.AnswerChoices.map((choice, index) => (
    <div key={index} style={{ marginBottom: '10px' }}>
        <button
            onClick={() => handleAnswerSelect(index)}
            style={{
                backgroundColor:
                    showCorrectAnswer && index === currentQuestion.CorrectAnswer
                        ? 'green' // Highlight the correct answer in green
                        : selectedAnswer === index
                        ? '#d3d3d3' // Selected but incorrect answer
                        : 'white', // Default button color
                color: 'black',
                padding: '10px',
                border: '1px solid #ccc',
                cursor: 'pointer',
                width: '100%',
                textAlign: 'left',
            }}
            disabled={showCorrectAnswer} // Disable buttons once time is up or answer is submitted
        >
            {choice}
        </button>
    </div>
))}

            </div>

            {/* Submit Answer Button */}
            {!showCorrectAnswer && (
                <button
                    onClick={handleSubmit}
                    style={{
                        marginTop: '20px',
                        backgroundColor: '#007BFF',
                        color: 'white',
                        padding: '10px',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Submit Answer
                </button>
            )}
        </div>
    );
};

export default ScenarioDisplay;
