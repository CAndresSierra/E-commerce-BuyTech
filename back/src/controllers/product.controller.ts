import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import {
  getProductByIdService,
  getProductsService,
} from "../services/products.service";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const product = await getProductByIdService(id);
    res.status(200).json(product);
    return product;
  } catch (error) {
    res.status(404).json({ message: "Product no encontrado" });
  }
};
