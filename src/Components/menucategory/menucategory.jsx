import MenuItem from "../MenuItem/menuItem.jsx";
import styles from "./menucategory.module.css";
export default function MenuCategory(props) {
  return (
    <div id={props.id} className={styles.container}>
      <div className={styles.categoryTop}>
        <h3>{props.category} </h3> <span id={styles.price}>{props.price}</span>
      </div>
      {props.food &&
        props.food.map((item, idx) => (
          <MenuItem key={`item${idx}`} food={item} />
        ))}
    </div>
  );
}
