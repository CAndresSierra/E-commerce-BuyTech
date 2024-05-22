import { categoriesToPreLoad } from "@/helpers/categories";
import { IProduct } from "@/interfaces/IProduct";

const Card: React.FC<IProduct> = ({
  id,
  name,
  price,
  image,
  description,
  categoryId,
  stock,
}) => {
  return (
    <div className="flex flex-col justify-center  items-center h-[400px] min-h-[100px]  w-[350px] min-w-cardMinW  mb-5 mt-5 bg-white border border-gray-200 rounded-lg shadow-cardShadow">
      <div className="flex flex-col">
        <img
          className="rounded-t-lg  max-w-[11rem]   min-h-[5rem] mt-2 object-cover"
          src={image}
          alt="Product Image"
        />
      </div>

      <div className="flex flex-col justify-start items-center mb-2 gap-3 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>

        <div className="flex flex-row gap-2">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {" "}
            Category: {categoriesToPreLoad[categoryId - 1].name}
          </span>
          <br />

          <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
            {" "}
            $: {price}
          </span>
        </div>

        <button className="text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
          Ver producto
        </button>
      </div>
    </div>
  );
};

export default Card;
