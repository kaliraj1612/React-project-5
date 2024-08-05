import { cartContext } from "../App";
import "./product.css";
import { useContext } from "react";

export const Product = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);

  console.log('Product data:', product);

  const name = product.name.length > 21 ? product.name.substring(0, 20) + "..." : product.name;

  const addCart = () => {
    if (!cart.some((c) => c.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id));
  };

  return (
    <div className="product">
      <div className="img">
        <img src={product.picture} alt={product.name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>Price Rs: {product.amount}</p>
        {cart.some((c) => c.id === product.id) ? (
          <button className="btnRemove" onClick={removeCart}>Remove From Cart</button>
        ) : (
          <button onClick={addCart}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;

