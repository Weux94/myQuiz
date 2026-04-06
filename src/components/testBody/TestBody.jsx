import { useState } from 'react';
import allQuestions from '../../data/data.js';
import './TestBody.css';

const ANIMATION_DURATION = 600;
const GAME_SIZE = 15;

function pickRandom(arr, count) {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, count);
}

export default function TestBody() {
  const [questions, setQuestions] = useState(() => pickRandom(allQuestions, GAME_SIZE));
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const total = questions.length;

  function handleAnswer(isCorrect) {
    if (isAnimating) return;

    if (isCorrect) setCorrect(prev => prev + 1);
    else setWrong(prev => prev + 1);

    setIsAnimating(true);
    setIsVisible(false);

    setTimeout(() => {
      if (index < total - 1) {
        setIndex(prev => prev + 1);
        setIsVisible(true);
        setIsAnimating(false);
      } else {
        setIsFinished(true);
      }
    }, ANIMATION_DURATION);
  }

  function handleRestart() {
    setQuestions(pickRandom(allQuestions, GAME_SIZE));
    setIndex(0);
    setCorrect(0);
    setWrong(0);
    setIsFinished(false);
    setIsVisible(true);
    setIsAnimating(false);
  }

  if (isFinished) {
    return (
      <div className="container">
        <div className="result">
          <h2 className="result__title">Ты славно потрудился!</h2>
          <p className="result__score">
            <span className="result__correct">{correct}</span>
            {' / '}
            <span className="result__total">{total}</span>
          </p>
          <p className="result__sub">Неправильных: {wrong}</p>
          <button className="result__btn" onClick={handleRestart}>
            Начать заново
          </button>
        </div>
      </div>
    );
  }

  const current = questions[index];

  return (
    <div className="container">
      <div className={`quiz ${isVisible ? 'quiz--visible' : 'quiz--hidden'}`}>

        <h2 className="quiz__title">Simple Questions</h2>

        <p className="quiz__question">{current.question}</p>

        <div className="quiz__answers">
          {current.answers.map((answer, i) => (
            <button
              key={i}
              className="quiz__btn"
              disabled={isAnimating}
              onClick={() => handleAnswer(answer.isCorrect)}
            >
              {answer.text}
            </button>
          ))}
        </div>

        <div className="quiz__progress">
          <span
            className="quiz__progress-correct"
            style={{ width: `${(correct / total) * 100}%` }}
          />
          <span
            className="quiz__progress-wrong"
            style={{ width: `${(wrong / total) * 100}%` }}
          />
        </div>

        <p className="quiz__stats">
          Правильно <b className="quiz__stats--correct">{correct}</b>
          {' / '}
          <b className="quiz__stats--wrong">{wrong}</b> Неправильно
        </p>

      </div>
    </div>
  );
}
