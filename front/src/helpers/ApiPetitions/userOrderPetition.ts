const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getOrders(token: string) {
  try {
    const response = await fetch(`${apiUrl}/users/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    return response;
  } catch (error: any) {
    throw new Error(error);
  }
}
