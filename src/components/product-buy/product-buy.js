import React, { PureComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../button/button';
import './product-buy.css';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';

export const ProductBuy = ({ product }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.itemsInCart);
  const isItemInCart = items.some(item => item.id === product.id);

  const handelClick = (e) => {
    e.stopPropagation();
    if ( isItemInCart ) {
      dispatch(deleteItemFromCart(product.id));
    } else {
      dispatch(setItemInCart(product));
    }
  }

  return (
    <div className="product-buy">
      <span className='product-buy_price'>{product.price} руб.</span>
      <Button 
        type={ isItemInCart ? "secondary" : "primary" }
        onClick={ handelClick }
      >
        { isItemInCart ? 'Убрать из корзины' : 'В корзину' }
      </Button>
    </div>
  )
};
