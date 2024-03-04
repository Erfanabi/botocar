import { useRouter } from "next/router";
import Card from "../module/Card";
import styles from "./CarsList.module.css";
import Back from "../icons/Back";

function CarsList({ data }) {
  const router = useRouter();

  const backHandler = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={backHandler}>
        <Back />
        <p>back</p>
      </div>
      <div className={styles.card}>
        {data.map((car) => {
          return <Card {...car} key={car.id} />;
        })}
      </div>
    </div>
  );
}

export default CarsList;
