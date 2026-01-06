import { useState } from "react";
import "./App.css";
import QuizSummary from "./components/QuizSummary";
import Quiz from "./components/Quiz";
import { quizData } from "./quiz";

function calculateScore(data, userData) {
  let sum = 0;
  data.forEach((question) => {
    const userAnswer = userData[question.id - 1].answer;
    if (question.correctAnswer === userAnswer) {
      sum += 1;
    }
  });
  return sum;
}

function App() {
  const [quiz, setQuiz] = useState([]);
  const currentQuestion = quiz.length;

  let finalScore = 0;
  let percentage = 0;

  if (quizData.length === quiz.length) {
    finalScore = calculateScore(quizData, quiz);
    percentage = (finalScore / quizData.length) * 100;
  }

  function handleNextQuestion(selectedAnswer) {
    setQuiz([
      ...quiz,
      {
        id: quizData[currentQuestion].id,
        answer: selectedAnswer,
      },
    ]);
  }

  function restartQuiz() {
    setQuiz([]);
  }

  return (
    <div className="container">
      <h1>Quiz App</h1>
      {quizData.length === quiz.length ? (
        <QuizSummary
          score={finalScore}
          percentage={percentage}
          totalQuestion={quizData.length}
          restartQuiz={restartQuiz}
        />
      ) : (
        <Quiz
          quizDetails={quizData[currentQuestion]}
          onQuestionChange={handleNextQuestion}
          currentQuestion={currentQuestion}
          quizLength={quizData.length - 1}
        />
      )}
    </div>
  );
}

export default App;
