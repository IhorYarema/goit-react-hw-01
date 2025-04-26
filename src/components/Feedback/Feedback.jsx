import styles from './Feedback.module.css';

const Feedback = ({ feedback: { good, neutral, bad }, total }) => {
  // const total = good + neutral + bad;
  // const positivePercentage = total ? Math.round((good / total) * 100) : 0;

  return (
    <div className={styles.feedback}>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      {/* <p>Total: {total}</p> */}
      {/* <p>Positive: {positivePercentage}%</p> */}
    </div>
  );
};

export default Feedback;
