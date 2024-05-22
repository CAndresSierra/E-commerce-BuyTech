export interface IUserSession {
  token: string;
  userDta: {
    address: string;
    email: string;
    id: number;
    name: string;
    phone: string;
    role: string;
    orders: [];
  };
}
