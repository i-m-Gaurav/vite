import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// To get all the products


export const getProducts = async (req, res) => {
  try {
    const product = await prisma.product.findMany();
    res.status(201).json(product);
  } catch (error) {
    console.error("can't fetch the products", error);
  }
};


// To create the product.
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

// To delete a single product.

export const deleteProduct = async (req,res) => {

    const {id} = req.params;
    console.log(req.params);

    try {

        await prisma.product.delete({
            where : {
                id : id,
            }
        })

        res.status(200).json({success : true, message : "Product Deleted"});


        
    } catch (error) {

        console.error("Failed to delete", error);
        res.status(500).json({success : false, message : "Failed to delete the product"});
        
    }

}

export const updateProduct = async (req,res) => {

    const { id } = req.params;

    const  { name, price, description, image, quantity} = req.body;

    

    try {
        
        const updatedProduct = await prisma.product.update({
            where: { id: id },
            data: { name, price, description, image , quantity}
        });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {

        console.error("Failed to update the product ", error);
        
    }

}
