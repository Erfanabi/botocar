import CarsList from "@/components/template/CarsList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function FilteredCars() {
  const router = useRouter();

  const [min, max] = router.query.slugs || [];

  const filterData = carsData.filter(
    (item) => item.price > min && item.price < max
  );

  if (!filterData.length) return <h3>NotFound</h3>;

  return <CarsList data={filterData} />;
}

export default FilteredCars;
