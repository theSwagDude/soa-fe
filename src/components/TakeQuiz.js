import React, { useState, useEffect } from 'react';
import './TakeQuiz.css';
const TakeQuiz = () => {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
			time: 10,
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
			time: 50,
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
			time: 5,
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [timeLeft, setTimeLeft] = useState(questions[currentQuestion].time || 30);
	const [bgColor, setBgColor] = useState('');

	useEffect(() => {
		if (!showScore && timeLeft > 0) {
			const timerId = setTimeout(() => {
				setTimeLeft(timeLeft - 1);
			}, 1000);
			return () => clearTimeout(timerId);
		} else if (timeLeft === 0) {
			handleAnswerOptionClick(false);
		}
	}, [timeLeft, showScore]);
	

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
			setBgColor('correct');
		}
		else {
			setBgColor('incorrect');
		}

		setTimeout(() => {
			setBgColor('');
		}, 1000);

		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
			setTimeLeft(questions[currentQuestion + 1].time || 30);
		} else {
			setShowScore(true);
		}
	};

	
	return (
		
		<div className={`TakeQuizBG ${bgColor}`}>
			
				<div className='takequiz'>
					{showScore ? (
						<div className='score-section'>
							You scored {score} out of {questions.length}
						</div>
					) : (
						<>
							<div className='question-section'>
								<div className='question-count'>
									<span>Question {currentQuestion + 1}</span>/{questions.length}
								</div>
								<div className='question-text'>{questions[currentQuestion].questionText}</div>
								<div className='timer-text'>Time left: {timeLeft}</div>
							</div>
							<div className='answer-section'>
								{questions[currentQuestion].answerOptions.map((answerOption) => (
									<button className='TakeQuiz-button' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
								))}
							</div>
						</>
					)}
				</div>
			</div>

	);
}
export default TakeQuiz;