import { categoriesToPreLoad } from "../../helpers/Categories";

//styles
import { CardContainer } from "./styles/Container";

const Card = ({ name, price, image, description, categoryId, stock }) => {
  return (
    <CardContainer>
      <img src={image} alt="Product Image" />

      <h2>{name}</h2>
      <p className="description">{description}</p>
      <p>Category: {categoriesToPreLoad[categoryId - 1].name}</p>
      <p>$: {price}</p>
      <p>Stock: {stock}</p>
    </CardContainer>
  );
};

export default Card;
