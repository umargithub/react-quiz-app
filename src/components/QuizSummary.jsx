export default function QuizSummary({
  score,
  percentage,
  totalQuestion,
  restartQuiz,
}) {
  return (
    <div className="result">
      <h1>Quiz Complete!</h1>
      <p>
        Your Score - {score} / {totalQuestion}
      </p>
      <p>Percentage - {percentage}%</p>
      <button onClick={restartQuiz} className="restart">
        Restart Quiz
      </button>
    </div>
  );
}
