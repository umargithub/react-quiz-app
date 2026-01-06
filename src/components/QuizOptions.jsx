export default function QuizOptions({ id, options, onSelect }) {
  return (
    <ul className="quiz-options">
      {options.map((option, index) => (
        <li key={index}>
          <input
            onChange={() => onSelect(index)}
            type="radio"
            name="question"
          />
          {option}
        </li>
      ))}
    </ul>
  );
}
