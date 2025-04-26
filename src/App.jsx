import React, { useState } from 'react';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Description from './components/Description/Description';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Функція обробки кліків по кнопкам
  const updateFeedback = feedbackType => {
    setFeedback(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  // Загальна кількість відгуків
  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;

  return (
    <>
      <Description />
      <Options
        options={Object.keys(feedback)}
        onSendFeedback={updateFeedback}
      />
      {totalFeedback ? (
        <Feedback feedback={feedback} total={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
