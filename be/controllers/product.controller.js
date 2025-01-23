import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (req, res) => {
  try {
    const product = await prisma.product.findMany();
    res.status(201).json(product);
  } catch (error) {
    console.error("can't fetch the products", error);
  }
};


export const createProduct = async (req, res) => {
  const { name, description, image, price, quantity } = req.body;

  if (!name || !description || !price || !quantity) {
    return res
      .status(400)
      .json({ success: false, message: "Missing required fields" });
  }

  console.log(req.body);
  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        image,
        quantity,
      },
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Failed to create Product", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create product" });
  }
};
