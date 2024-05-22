import { IProduct } from "@/interfaces/IProduct";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getProductsDb() {
  try {
    const res = await fetch(`${apiUrl}/products`, {
      method: "GET",
    });
    const products: IProduct[] = await res.json();
    return products;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getProducts() {
  try {
    const dbProducts = await getProductsDb();
    return dbProducts;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getProductById(id: string) {
  try {
    const res = await fetch(`${apiUrl}/products/${id}`, {
      method: "GET",
    });
    const productId = await res.json();
    return productId;
  } catch (error: any) {
    throw new Error(error);
  }
}
