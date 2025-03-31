import { useEffect } from "react";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { products, fetchProducts } = useProductStore();
  const navigate = useNavigate();

  const handleClick = () => {

    navigate("/create")
    
  }

  

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products", products);

  return (
    <>
    <div>

        <button onClick={handleClick} >Add Product</button>

    </div>
      {products.map((product) => (
        <ProductCard
         id={product.id}
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          image={product.image}
          quantity={product.quantity}
        />
      ))}
    </>
  );
};

export default HomePage;
