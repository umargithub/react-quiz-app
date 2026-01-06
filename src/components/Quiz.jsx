import { useState } from "react";
import QuizOptions from "./QuizOptions";

export default function Quiz({
  quizDetails,
  onQuestionChange,
  currentQuestion,
  quizLength,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  function handleSelectAnswer(index) {
    setSelectedAnswer(index);
  }

  function handleNextButton() {
    onQuestionChange(selectedAnswer);
    setSelectedAnswer(null);
  }
  return (
    <>
      <div className="quiz">
        <h3>{quizDetails.question}</h3>
        <QuizOptions
          key={quizDetails.id}
          id={quizDetails.id}
          options={quizDetails.options}
          onSelect={handleSelectAnswer}
        />
      </div>
      <button onClick={handleNextButton} disabled={selectedAnswer === null}>
        {currentQuestion === quizLength ? "Show Results" : "Next Question"}
      </button>
    </>
  );
}
