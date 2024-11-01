import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { IoCartSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { CartMenu } from '../cart-menu/cart-menu';
import { ItemsInCart } from '../items-in-cart/items-in-cart';
import { calcTotalPrice } from '../utils';
import './cart-block.css';

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();

  const handleGoToCartClick  = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate("/cart");
  }, [navigate]);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <IoCartSharp 
        color="white"
        size={25}
        className="cart-icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      { totalPrice > 0 ? <span className='cart-block_total-price'> { totalPrice } руб.</span> : null}
      {isCartMenuVisible && <CartMenu onClick={ handleGoToCartClick }/>}
    </div>
  )
};
