import Card from "../module/Card";
import styles from "./CarsPage.module.css";

function CarsPage({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => {
        return <Card {...car} key={car.id} />;
      })}
    </div>
  );
}

export default CarsPage;
