import PropTypes from "prop-types";
import { useProductStore } from "../store/product";
import { useState } from "react";

const ProductCard = ({ id, name, price, description, image, quantity }) => {
  const { deleteProduct, editProduct } = useProductStore();

  const [updatedProduct, setUpdatedProduct] = useState({name,price,description,image,quantity});
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteProduct(id);
    } catch (error) {
      console.error("error deleting.", error);
    }
  };

  const handleEdit = async () => {
    try {
      await editProduct(id, updatedProduct);
      setIsEditing(false);
      setUpdatedProduct("");
    } catch (error) {
      console.error("Error editing product", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <img className="w-full h-48 object-cover" src={image} alt={name} />

      <div onClick={handleDelete} className="text-red-500">
        delete
      </div>

      <div className="text-red-500" onClick={() => setIsEditing(!isEditing) }>
        {isEditing ? "Cancel" : "Edit"}
      </div>

      {isEditing ? (
        <div className="px-6 py-4">
          <input
            type="text"
            name="name"
            value={updatedProduct.name}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded border-gray-500 text-black"
            placeholder="Product Name"
          />
          <input
            type="text"
            name="price"
            value={updatedProduct.price}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded border-gray-500 text-black"
            placeholder="Price"
          />
          <input
            type="text"
            name="description"
            value={updatedProduct.description}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded border-gray-500 text-black"
            placeholder="Description"
          />
          <input
            type="text"
            name="image"
            value={updatedProduct.image}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded border-gray-500 text-black"
            placeholder="Image URL"
          />
          <input
            type="text"
            name="quantity"
            value={updatedProduct.quantity}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded border-gray-500 text-black"
            placeholder="Quantity"
          />
          <button
            onClick={handleEdit}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
          >
            Save Changes
          </button>
        </div>
      ) : (
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>

          <p className="text-gray-600 text-sm mb-4">{description}</p>

          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold text-gray-900">${price}</p>

            <p className="text-sm text-gray-600">In Stock: {quantity}</p>
          </div>
        </div>
      )}

      {/* Add to Cart Button */}
      <div className="px-6 pb-4">
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;
