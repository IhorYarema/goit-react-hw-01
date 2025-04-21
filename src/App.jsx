import React, { useState } from 'react';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Функція обробки кліків по кнопкам
  const handleFeedback = type => {
    setFeedback(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  return (
    <>
      <Options
        options={Object.keys(feedback)}
        onLeaveFeedback={handleFeedback}
      />
      <Feedback feedback={feedback} />
    </>
  );
};

export default App;
