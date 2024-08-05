import React, { useEffect, useState, useContext } from 'react';
import './ViewCart.css';
import { cartContext } from '../App';

export const ViewCart = () => {
  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart && Array.isArray(cart)) {
      const totalAmount = cart.reduce((acc, curr) => {
        const amount = parseFloat(curr.amount);
        if (!isNaN(amount)) {
          return acc + amount;
        }
        return acc; 
      }, 0);

      setTotal(totalAmount);
    }
  }, [cart]);

  return (
    <>
      <h1 className='cart-heading'>Cart Products</h1>
      <div className='cart-container'>
        {cart && cart.length > 0 ? (
          cart.map((product) => (
            <div className='cart-product'  key={product.id}>
              <div className='product-image'>
                <img src={product.picture} alt={product.name} width={250} height={200}           />
              </div>
              <div className='cart-product-details'>
                <h3>{product.name}</h3>
                <p>Price Rs: {product.amount}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No products in cart</p>
        )}
      </div>
      <h2 className='cart-amt'>Total Amount Rs: {total.toFixed(2)}</h2>
    </>
  );
}

export default ViewCart;

