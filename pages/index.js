import AllButton from "@/components/module/AllButton";
import Categories from "@/components/module/Categories";
import SearchBar from "@/components/module/SearchBar";
import CarsPage from "@/components/template/CarsPage";
import carsData from "@/data/carsData";

export default function Home() {
  const cars = carsData.slice(0, 3);

  return (
    <div>
      <SearchBar />
      <Categories />
      <AllButton />
      <CarsPage data={cars} />
    </div>
  );
}
