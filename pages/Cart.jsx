import styled from 'styled-components';
import Breadcrumb from '../components/Breadcrumb';
import Center from '../components/Center';
import CartItem from '../components/CartItem';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartColumn from '../components/CartColumn';
import CartTotals from '../components/CartTotals';

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
            padding: 6px 10px;
            letter-spacing: 0.1rem;
            font-size: 14px;
        }
        .clear-btn {
            background-color: #222;
            color: #fff;
            border: none;
            border-radius: 4px;
            padding: 6px 10px;
            text-transform: capitalize;
            cursor: pointer;
            letter-spacing: 0.1rem;
            font-size: 14px;
        }
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

const StyledDiv = styled.div`
    display: grid;
    place-items: center;
    min-height: calc(100vh - (20vh - 12px));
    .container {
        text-align: center;
        a {
            padding: 6px 12px;
            margin-top: 12px;
        }
    }
    @media (min-width: 768px) {
        min-height: calc(100vh - (20vh - 42px));
    }
`;

export default function CartPage() {
    const { cartProducts, products, clearCart, isPaymentSuccess } =
        useCartContext();

    if (isPaymentSuccess) {
        return (
            <StyledDiv>
                <div className="container">
                    <h3>Thanks for your order!</h3>
                    <p>We will email when your order will be sent</p>
                    <Link className="btn" to={'/products'}>
                        Continue shopping
                    </Link>
                </div>
            </StyledDiv>
        );
    }

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
