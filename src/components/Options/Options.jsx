import css from "./Options.module.css";

export default function Options({ onUpdate, reset, total }) {
  return (
    <div>
      <ul className={css.optionsButtonsList}>
        <li>
          <button className={css.optionButton} onClick={() => onUpdate("good")}>
            Good
          </button>
        </li>
        <li>
          <button
            className={css.optionButton}
            onClick={() => onUpdate("neutral")}
          >
            Neutral
          </button>
        </li>
        <li>
          <button className={css.optionButton} onClick={() => onUpdate("bad")}>
            Bad
          </button>
        </li>
        {total !== 0 && (
          <li>
            <button className={css.optionButton} onClick={reset}>
              Reset
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
