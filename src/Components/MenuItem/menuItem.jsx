import styles from "./menuItem.module.css";

export default function MenuItem(props) {
  return (
    <div>
      {props.food.hasOwnProperty(`price`) === true ? (
        <div className={styles.container}>
          <h4 className="foodName">{props.food.name}</h4>
          <p>{props.food.description}</p>
          <p className={styles.price}>{props.food.price}</p>
        </div>
      ) : (
        <div className={styles.container}>
          <h4 className="foodName">{props.food.name}</h4>
          <p>{props.food.description}</p>
        </div>
      )}
    </div>
  );
}
