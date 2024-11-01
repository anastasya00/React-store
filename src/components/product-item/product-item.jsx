import React from 'react';
import { ProductBuy } from '../product-buy/product-buy';
import './product-item.css';

export const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <div className='product-item_details'>
        <span className='product-item_title'>{product.title}</span>
        <div className='product-item_buy'>
            <ProductBuy product={product}/>
        </div>
      </div>
    </div>
  )
};
