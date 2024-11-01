import React from "react";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../redux/cart/reducer";
import { TiDelete } from "react-icons/ti";
import "./cart-item.css";

export const CartItem = ({ title, price, id }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteItemFromCart(id));
  };
  
  return (
    <div className="cart-item">
      <span className="cart-item_title">{title}</span>
      <div className="cart-item__price">
        <span>{price} руб.</span>
        <TiDelete 
          size={20}
          className="cart-item__delete-icon"
          onClick={ handleDeleteClick }
        />
      </div>
    </div>
  );
};