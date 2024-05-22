const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(products: number[], token: string) {
  try {
    const response = await fetch(`${apiUrl}/orders/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        products,
      }),
    });
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
}
