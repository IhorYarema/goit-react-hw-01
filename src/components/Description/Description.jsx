import styles from './Description.module.css';

const Description = () => {
  return (
    <div className={styles.description}>
      <h1 className={styles.mainTitle}>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
