import Card from "../Card/Card";

//Styles
import { ContainerCards } from "./styles/Container";

const CardsComponent = ({ productsToPreLoad }) => {
  return (
    <ContainerCards>
      {productsToPreLoad.map((product) => {
        return (
          <Card
            key={product.name}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            categoryId={product.categoryId}
            stock={product.stock}
          />
        );
      })}
    </ContainerCards>
  );
};

export default CardsComponent;
