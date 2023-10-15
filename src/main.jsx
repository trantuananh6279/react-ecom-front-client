import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ProductProvider } from '../context/ProductContext.jsx';
import { FilterProvider } from '../context/FilterContext.jsx';
import { CartProvider } from '../context/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ProductProvider>
        <FilterProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </FilterProvider>
    </ProductProvider>
);
