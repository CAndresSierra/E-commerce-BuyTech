"use client";
import { usePathname } from "next/navigation";

const NoShow = ({ children }: any) => {
  const pahtname = usePathname();

  return (
    <div
      className={pahtname === "/" || pahtname === "/dashboard" ? "hidden" : ""}
    >
      {children}
    </div>
  );
};
export default NoShow;
