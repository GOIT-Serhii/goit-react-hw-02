import { useEffect, useState } from "react";
import css from "./App.module.css";
import Options from "../Options/Options";
import Description from "../Description /Description";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const getReviews = () => {
  const savedUsersClicks = window.localStorage.getItem("user-clicks");

  return savedUsersClicks !== null
    ? JSON.parse(savedUsersClicks)
    : {
        good: 0,
        neutral: 0,
        bad: 0,
      };
};

function App() {
  const [clicks, setClicks] = useState(getReviews);
  useEffect(() => {
    window.localStorage.setItem("user-clicks", JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);

  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.container}>
      <Description />
      <Options
        onUpdate={updateFeedback}
        total={totalFeedback}
        reset={resetFeedback}
      />

      {totalFeedback ? (
        <Feedback value={clicks} positiveFeedback={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
