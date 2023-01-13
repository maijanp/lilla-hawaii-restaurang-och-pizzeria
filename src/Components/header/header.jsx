import styles from "./header.module.css";

export default function Header() {
  return (
    <header className="col">
      <div className={styles.imgContainer}>
        <img src="../images/sunset.png" alt="" />
      </div>
      <div className="text-center section">
        <h1>Lilla Hawaii</h1>
        <h2>Restaurang och Pizzeria</h2>
      </div>
    </header>
  );
}
