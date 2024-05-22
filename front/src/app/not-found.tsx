import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-4  mt-20 mb-7 md:m-t20">
      <h1 className="text-3xl font-semibold text-not-found md:text-5xl">
        Ha ocurrido un problema!
      </h1>
      <div className="px-4 ml-8 flex flex-col items-center justify-center">
        <p className=" text-lg md:text-2xl">
          No podemos encontrar la pagina que estas buscando.
        </p>
        <div className="flex flex-col items-center">
          <p className=" text-lg md:text-xl">
            Regresa al{" "}
            <Link
              href="/home"
              className="underline underline-offset-2 text-not-found"
            >
              Home
            </Link>
          </p>
        </div>
        <div>
          <span className="bg-red-800 text-red-300 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
            Error: 404-NotFound
          </span>
        </div>
      </div>
    </div>
  );
}
