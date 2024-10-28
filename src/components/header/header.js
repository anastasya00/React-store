import React from 'react';
import { Link } from 'react-router-dom';
import { CartBlock } from '../cart-block';
import './header.css';

export const Header = () => {
  return (
    <div className="header">
        <div className="wrapper">
            <Link to={"/"} className='header_store_title'>
                Store
            </Link>
        </div>
        <div className='wrapper header_cart_btn_wrapper'>
            <CartBlock></CartBlock>
        </div>
    </div>
  )
};


