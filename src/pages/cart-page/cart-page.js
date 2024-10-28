import React from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from '../../components/cart-item/cart-item';
import './cart-page.css';

export const CartPage = () => {
    const items = useSelector((state) => state.cart.itemsInCart);

    if(items.length < 1) {
      return <h1>Ваша корзина пуста!</h1>
    }

  return (
    <div className="cart-page">
      <div className="cart-page_left">
        { items.map(product => <CartItem title={product.title} price={product.price} id={product.id} />) }
      </div>
    </div>
  )
};
