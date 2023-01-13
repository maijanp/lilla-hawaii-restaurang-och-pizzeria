import styles from "./navSmallScreen.module.css";
export default function NavSmallScreen() {
  return (
    <nav>
      <div className={styles.navItem}>
        <a href="#pizza">
          <i id={styles.icon1}></i>
          Pizza
        </a>
      </div>
      <div className={styles.navItem}>
        <a href="#salads">
          <i id={styles.icon2}></i>
          Sallader
        </a>
      </div>
      <div className={styles.navItem}>
        <a href="#kebab">
          <i id={styles.icon3}></i>
          Kebab&Gyros
        </a>
      </div>
      <div className={styles.navItem}>
        <a href="#burgers">
          <i id={styles.icon4}></i>
          Hamburgare
        </a>
      </div>
    </nav>
  );
}
