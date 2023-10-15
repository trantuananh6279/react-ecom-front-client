import styled from 'styled-components';
import Breadcrumb from '../components/Breadcrumb';
import Center from '../components/Center';
import CartItem from '../components/CartItem';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartColumn from '../components/CartColumn';
import CartTotals from '../components/CartTotals';
import { useEffect, useState } from 'react';
import { customFetch } from '../utils/axios';

const Wrapper = styled.div`
    .empty {
        min-height: calc(100vh - 157px);
        text-align: center;
        padding: 80px 20px;
        h2 {
            margin-bottom: 1rem;
            text-transform: none;
        }
    }
    @media (min-width: 768px) {
        min-height: calc(100vh - 153px);
    }
    .cart-container {
        padding: 80px 20px;
        min-height: calc(100vh - (20vh + 150px));
        .top-hr {
            display: none;
        }
        hr {
            height: 2px;
            background-color: #e5e7ea;
            border: none;
        }
    }
    .link-container {
        display: flex;
        justify-content: space-between;
        margin: 32px 0;

        .btn {
            text-transform: capitalize;
            padding: 4px 8px;
            letter-spacing: 0.1rem;
            font-size: 14px;
        }
        .clear-btn {
            background-color: #222;
            color: #fff;
            border: none;
            border-radius: 4px;
            padding: 4px 8px;
            text-transform: capitalize;
            cursor: pointer;
            letter-spacing: 0.1rem;
            font-size: 14px;
        }
    }
    .btn.checkout {
        width: 100%;
        margin-top: 16px;
        padding: 6px 12px;
        font-size: 14px;
    }
    @media (min-width: 768px) {
        .cart-container {
            .top-hr {
                display: block;
                margin-top: 1rem;
                margin-bottom: 3rem;
            }
        }
    }
`;

export default function CartPage() {
    const { cartProducts, products, clearCart } = useCartContext();

    if (cartProducts.length < 1) {
        return (
            <Wrapper>
                <div className="empty">
                    <h2>Your cart is empty</h2>
                    <Link to={'/products'} className="btn">
                        fill it
                    </Link>
                </div>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <Breadcrumb title={'Cart'} />
            <Center>
                <div className="cart-container">
                    <CartColumn />
                    <hr className="top-hr" />
                    <div className="cart-list">
                        {products.map((product, i) => (
                            <CartItem key={i} {...product} />
                        ))}
                    </div>
                    <hr />
                    <div className="link-container">
                        <Link to={'/products'} className="btn">
                            continue shopping
                        </Link>
                        <button className="clear-btn" onClick={clearCart}>
                            clear shopping cart
                        </button>
                    </div>
                    <CartTotals />
                </div>
            </Center>
        </Wrapper>
    );
}
