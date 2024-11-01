import React from "react";
import { ProductItem } from "../../components/product-item";
import './home-page.css';

const PRODUCTS = [
    {
        title: 'Product 1',
        price: 1000,
        id: 1
    },
    {
        title: 'Product 2',
        price: 12000,
        id: 2
    },
    {
        title: 'Product 3',
        price: 1435,
        id: 3
    },
    {
        title: 'Product 4',
        price: 2000,
        id: 4
    },
    {
        title: 'Product 5',
        price: 2343,
        id: 5
    },
    {
        title: 'Product 6',
        price: 8765,
        id: 6
    },
]

export const HomePage = () => {
    return (
        <div className="home-page">
            { PRODUCTS.map(product => <ProductItem product={product} key={product.id}/>)}
        </div>
    )
}