import React from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from '../cart-item/cart-item';
import { Button } from '../button/button';
import { calcTotalPrice } from '../utils';
import './cart-menu.css';

export const CartMenu = ({ onClick }) => {
    const items = useSelector((state) => state.cart.itemsInCart);

  return (
    <div className="cart-menu">
        <div className='cart-menu_product-list'>
            {items.length > 0 ?
             items.map((product) => ( <CartItem
                                        price={product.price}
                                        title={product.title}
                                        id={product.id}
                                    />
                                ))
                            : "Корзина пуста"}
        </div>

        { items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого: </span>
            <span>{ calcTotalPrice(items) } руб.</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null }
    </div>
  )
};
