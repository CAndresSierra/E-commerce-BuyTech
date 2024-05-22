import { IProduct } from "@/interfaces/IProduct";
import Card from "../Card/Card";
import Link from "next/link";

const CardsComponent: React.FC<{ products: IProduct[] }> = ({ products }) => {
  return (
    <div className="flex justify-evenly items-center flex-wrap">
      {products.map((product) => {
        return (
          <Link href={`/product/${product.id}`} key={product.id}>
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              categoryId={product.categoryId}
              stock={product.stock}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default CardsComponent;
