import PropTypes from "prop-types";



const ProductCard = ({ name, price, description, image, quantity }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={name}
      />

      {/* Product Details */}
      <div className="px-6 py-4">
        {/* Product Name */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>

        {/* Product Description */}
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Price and Quantity */}
        <div className="flex justify-between items-center">
          {/* Price */}
          <p className="text-lg font-semibold text-gray-900">${price}</p>

          {/* Quantity */}
          <p className="text-sm text-gray-600">In Stock: {quantity}</p>
        </div>
      </div>

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
    name : PropTypes.string.isRequired,
    price : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    quantity : PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
}

export default ProductCard;