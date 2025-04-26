import styles from './Options.module.css';

const Options = ({ options, onSendFeedback }) => {
  return (
    <div className={styles.options}>
      {options.map(option => (
        <button key={option} onClick={() => onSendFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
