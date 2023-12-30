import React, { useState } from 'react';

export default function App() {
	
	const questions = [
		{
			questionText: 'Who is the father of Artificial Intelligence',
			answerOptions: [
				{ answerText: 'Alan Turing', isCorrect: false },
				{ answerText: 'Charles Babbage', isCorrect: false },
				{ answerText: 'John McCarthy', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Naive Bayes classifiers are a collection ------------------of algorithms?',
			answerOptions: [
				{ answerText: 'clustering', isCorrect: false },
				{ answerText: 'classification', isCorrect: true },
				{ answerText: 'regression', isCorrect: false },
				{ answerText: 'all', isCorrect: false },
			],
		},
		{
			questionText: 'Naïve Bayes algorithm is  based on ----?',
			answerOptions: [
				{ answerText: 'Bayes theorem', isCorrect: true },
				{ answerText: 'Unsupervised learning', isCorrect: false },
				{ answerText: 'Deep learning', isCorrect: false },
				{ answerText: 'all', isCorrect: false },
			],
		},
		{
			questionText: 'What is the best case complexity for shell sort?',
			answerOptions: [
				{ answerText: 'O(1)', isCorrect: false },
				{ answerText: 'O(n)', isCorrect: true },
				{ answerText: 'O(logn)', isCorrect: false },
				{ answerText: 'O(n logn)', isCorrect: false },
			],
		},
		{
			questionText: 'In a decoder, if the input lines are 4 then number of maximum output lines will be',
			answerOptions: [
				{ answerText: '2', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '8', isCorrect: false },
				{ answerText: '16', isCorrect: true },
			],
		},
		{
			questionText: 'How many total tuples are there in Turing machine?',
			answerOptions: [
				{ answerText: '4-tuple', isCorrect: false },
				{ answerText: '7-tuple', isCorrect: true },
				{ answerText: '8-tuple', isCorrect: false },
				{ answerText: '6-tuple', isCorrect: false },
			],
		},
		{
			questionText: 'How many number of tuples in Turing machine?',
			answerOptions: [
				{ answerText: '5-tuple', isCorrect: true },
				{ answerText: '6-tuple', isCorrect: false },
				{ answerText: '8-tuple', isCorrect: false },
				{ answerText: '3-tuple', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
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
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
