import CarDetails from "@/components/template/CarDetails";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function CarId() {
  const { query } = useRouter();
  const newData = carsData.filter((item) => item.id == query.carId);

  return <CarDetails data={newData[0]} />;
}

export default CarId;
