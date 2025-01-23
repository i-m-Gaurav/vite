import { useState } from "react";
import { useProductStore } from "../store/product";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
    const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    quantity: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async (e) => {
    e.preventDefault();

    // await createProduct(newProduct);

    // setNewProduct({name : "", description : "", image :"", price : "", quantity: ""})

    try {
        // Send the new product data to the backend
        const result = await createProduct(newProduct);
  
        if (result.success) {
          alert(result.message); // Show success message
          // Reset the form
          setNewProduct({
            name: "",
            description: "",
            image: "",
            price: "",
            quantity: "",
          });
          navigate('/');
        } else {
          alert(result.message); // Show error message
        }
      } catch (error) {
        console.error("Error creating product:", error);
        alert("An error occurred while creating the product.");
      }
    };

  return (
    <>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          placeholder="Product Name"
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
         <input
          type="text"
          name="description"
          value={newProduct.description}
          placeholder="Product info"
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        />
         <input
          type="text"
          name="name"
          value={newProduct.price}
          placeholder="Price"
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
         <input
          type="text"
          name="quantity"
          value={newProduct.quantity}
          placeholder="Quantity"
          onChange={(e) =>
            setNewProduct({ ...newProduct, quantity: e.target.value })
          }
        />
         <input
          type="text"
          name="name"
          value={newProduct.image}
          placeholder="Image url"
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
        />
        <button type= "submit">Create</button>
      </form>
    </>
  );
};

export default CreatePage;
