import ImageCarousel from "../Carousel/carousel.jsx";
import styles from "./about.module.css";
export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h2>Vårt utbud</h2>
        <p style={{ marginBottom: "1rem" }}>
          Hos oss på Lilla Hawaii Restaurang & Pizzeria kan du avnjuta en god
          måltid på plats eller välja att hämta upp din mat för att avnjuta
          hemma. Är du över 18 år och vill dricka något gott till maten? Vi har
          fullständiga rättigheter för alkoholservering!
        </p>
        <p>
          Vi erbjuder även catering för olika tillfällen, kontakta gärna oss på
          <a href="tel:0455-332030"> 0455- 33 20 30 </a> för att planera i god
          tid och lämna egna eventuella önskemål
        </p>
      </div>
      <ImageCarousel></ImageCarousel>
    </div>
  );
}
