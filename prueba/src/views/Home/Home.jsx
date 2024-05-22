import CardsComponent from "../../components/CardsComponent/CardsComponent";

import { productsToPreLoad } from "../../helpers/Products";

//styles
import { HomeContainer } from "./styles/Container";

const Home = () => {
  return (
    <HomeContainer>
      <CardsComponent productsToPreLoad={productsToPreLoad} />
    </HomeContainer>
  );
};

export default Home;
