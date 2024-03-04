import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const router = useRouter();

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("Please Enter minimum and maximum price!");
    }
  };

  return (
    <form className={styles.container}>
      <div>
        <input
          placeholder="Inter min-price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          placeholder="Inter max-price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button type="submit" onClick={searchHandler}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
