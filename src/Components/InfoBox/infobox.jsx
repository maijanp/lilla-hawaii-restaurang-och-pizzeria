import styles from "./infobox.module.css";

export default function InfoBox() {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.section}>
          <h2>Öppetider</h2>
          <p className={styles.hours}>Måndag - Torsdag</p>
          <p className={styles.hours}>
            11 <sup>00</sup> - 13 <sup>00</sup>{" "}
          </p>
          <p className={styles.hours}>
            16<sup>00</sup> - 22<sup>00</sup>
          </p>
          <div className={styles.section}>
            <p>Fredag-Söndag</p>
            <p className={styles.hours}>
              14<sup>00</sup> - 22<sup>00</sup>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.section}>
          <h2>Hitta hit</h2>
          <p>Garpenvägen 90</p>
          <p>373 65 Hasslö</p>
        </div>
        <div className="section">
          <a href="tel:0455-33 20 30">0455- 33 20 30</a>
        </div>
      </div>
    </div>
  );
}
