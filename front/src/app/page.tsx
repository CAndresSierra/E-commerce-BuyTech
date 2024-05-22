import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-evenly my-8 mx-8">
      <div className="flex flex-col items-center md:flex-row justify-evenly  my-3">
        <div className="md:my-8 mx-4 flex flex-col justify-center ">
          <h1 className=" text-5xl md:text-8xl antialiased font-bold">
            Bienvenidos a <span className="text-blue-800">BuyTech</span>
          </h1>
          <br />
          <h1 className="text-xl md:text-2xl md: italic">
            Donde se consiguen los mejores precios del mercado tech. En BuyTech,
            <strong className="font-bold text-gray-900 dark:text-white">
              la calidad es nuestra prioridad.
            </strong>{" "}
            Cada producto que ofrecemos ha pasado rigurosas pruebas de calidad
            para asegurarnos de que cumpla con los más altos estándares.{" "}
            <strong className="font-bold text-gray-900 dark:text-white">
              ¡No te conformes con menos!
            </strong>
          </h1>
          <br />
          <br />
          <br />
          <div className="mb-5 flex justify-center">
            <Link href="/home">
              <button className="w-56 h-16 text-white bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2">
                Compra ya!
              </button>
            </Link>
          </div>
        </div>
        <img
          className="rounded-lg   shadow-2xl md:w-2/4 md:h-3/4 md:rounded-lg md:shadow-2xl"
          src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/10/asus-rog-strix-g15a-2494955.jpg?tf=3840x"
          alt="portatil gamer"
        />
      </div>
    </div>
  );
}
