import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import questionsData from '../../assets/questions.json'; // Updated import path

interface Question {
    Question: string;
    AnswerChoices: string[];
    CorrectAnswer: number;
}

const ScenarioDisplay: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(60);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const roomName = location.state?.roomName || '';

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
        // If the selected answer is correct, increment the correct answer count
        if (selectedAnswer === questions[currentQuestionIndex].CorrectAnswer) {
            setCorrectAnswersCount((prevCount) => prevCount + 1);
        }
        setShowCorrectAnswer(true);
        setTimeout(() => {
            goToNextQuestion();
        }, 2000); // Wait 2 seconds before moving to the next question
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
            <div style={{ padding: '20px' }}>
                <h2>Quiz Completed</h2>
                <p>
                    You answered {correctAnswersCount} out of {questions.length} questions correctly.
                </p>
                <button
                    onClick={() => navigate('/')}
                    style={{
                        marginTop: '20px',
                        backgroundColor: '#007BFF',
                        color: 'white',
                        padding: '10px',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Go to Home
                </button>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div style={{ position: 'relative', padding: '20px' }}>
            <h2>Question {currentQuestionIndex + 1}</h2>
            {/* Timer displayed in the top right corner */}
            <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
                Time left: {timeLeft} seconds
            </div>

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
                                        ? 'green'
                                        : selectedAnswer === index
                                        ? '#d3d3d3'
                                        : 'white',
                                color: 'black',
                                padding: '10px',
                                border: '1px solid #ccc',
                                cursor: 'pointer',
                                width: '100%',
                                textAlign: 'left'
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
                        cursor: 'pointer'
                    }}
                >
                    Submit Answer
                </button>
            )}
        </div>
    );
};

export default ScenarioDisplay;
