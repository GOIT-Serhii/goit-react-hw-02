import css from "./Feedback.module.css";

export default function Feedback({ value, total }) {
  return (
    <ul>
      <li>
        <p className={css.feedbackText}>Good: {value["good"]}</p>
      </li>
      <li>
        <p className={css.feedbackText}>Neutral: {value["neutral"]}</p>
      </li>
      <li>
        <p className={css.feedbackText}>Bad: {value["bad"]}</p>
      </li>
      <li>
        <p className={css.feedbackText}>
          Positive: {Math.round((value["good"] / total) * 100)}%
        </p>
      </li>
    </ul>
  );
}
