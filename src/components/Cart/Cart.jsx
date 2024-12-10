import React from "react";
import { useCartStore } from "../RSM/CartStore";
import "./Cart.css";
import "../App.css";

function Cart({ handleCloseCart }) {
  const { cart, increaseQuantity, decreaseQuantity } = useCartStore(
    (state) => ({
      cart: state.cart,
      increaseQuantity: state.increaseQuantity,
      decreaseQuantity: state.decreaseQuantity,
    })
  );

  return (
    <div className="cart">
      <div className="close_cart">
        <i className="fa-solid fa-xmark" onClick={handleCloseCart}></i>
      </div>
      <h2 className="title">Cart Items</h2>
      {cart.length === 0 ? (
        <p className="empty_text">No items in cart</p>
      ) : (
        <div className="cart_products">
          {cart.map((item) => (
            <div key={item.id} className="product">
              <img src={item.FirstImgSrc} alt={item.title} />
              <div className="product_info">
                <h3>{item.info}</h3>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="product_quantity">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                {item.quantity}
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
