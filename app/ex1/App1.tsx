import styles from './MyButton.module.css';

function MyButton() {
  return (
    <button className={styles.button}>I'm a button</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
