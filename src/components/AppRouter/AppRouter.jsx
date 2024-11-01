import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from "../../pages/home-page";
import { CartPage } from "../../pages/cart-page";
import { store } from "../../redux";
import { Header } from "../../components/header";
import './AppRouter.css';

export const AppRouter = () => {
  return (
    <Provider store={ store }>
      <Router>
        <div className="AppRouter">
          <Header></Header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
};
