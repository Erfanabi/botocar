import carsData from "@/data/carsData";
import { useRouter } from "next/router";
import CarsList from "@/components/template/CarsList";

function CategoriesCars() {
  const { query, back } = useRouter();
  const categorie = query.categoriesCars || "";

  const filterCars = carsData.filter((car) => car.category == categorie);

  return <CarsList data={filterCars} />;
}

export default CategoriesCars;
