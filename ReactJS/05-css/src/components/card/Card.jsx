import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <h1>This is Card Heading</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugiat
        officia error alias illum facilis debitis porro accusantium amet
        voluptates?
      </p>
      <button className={styles.btn}>Click Me</button>
    </div>
  );
};

export default Card;
