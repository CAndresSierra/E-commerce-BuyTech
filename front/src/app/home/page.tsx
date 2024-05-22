import CardsComponent from "@/components/CardsComponent/CardsComponent";
import { getProducts } from "@/helpers/ApiPetitions/productsPetitions";

const Home: React.FC = async () => {
  const products = await getProducts();

  return (
    <div className="flex flex-col justify-evenly mt-2">
      <div className="flex justify-center items-center">
        <CardsComponent products={products} />
      </div>
    </div>
  );
};

export default Home;
