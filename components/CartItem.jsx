import styled from 'styled-components';
import AmountButton from './AmountButton';
import { BiSolidTrashAlt } from 'react-icons/bi';
import { useState } from 'react';
import formatPrice from '../utils/formatPrice';
import { useCartContext } from '../context/CartContext';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 200px auto auto;
    place-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    .title {
        display: grid;
        grid-template-columns: 0.5fr 1.5fr;
        align-items: center;
        gap: 1rem;
        img {
            height: 75px;
            width: 75px;
            object-fit: cover;
        }
        .price-small {
            color: #ab7a5f;
            margin-bottom: 0;
        }
    }
    .amount-btns {
        width: 75px;
        h2 {
            font-size: 16px;
        }
    }
    .remove {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #bb2525;
        color: #fff;
        width: 1.5rem;
        height: 1.5rem;
        border: none;
        border-radius: 3px;
        svg {
            font-size: 14px;
        }
    }
    .subtotal,
    .price {
        display: none;
    }
    @media (min-width: 768px) {
        grid-template-columns: repeat(5, 1fr);
        .title {
            .price-small {
                display: none;
            }
        }
        .price {
            display: block;
            color: #ab7a5f;
            font-weight: 400;
        }
        .subtotal {
            display: block;
            color: #ab7a5f;
            font-weight: 400;
        }
    }
`;

export default function CartItem({ _id, name, price, images, stock }) {
    const { cartProducts, addToCart, decreaseQuantity, removeProductFromCart } =
        useCartContext();
    let subtotal = cartProducts.filter((id) => id === _id).length * price;
    let quantity = cartProducts.filter((id) => id === _id).length;
    // const [amount, setAmount] = useState(quantity || 1);

    function increase() {
        let newAmount = quantity + 1;
        if (newAmount >= stock) {
            return;
        }
        addToCart(_id);
    }

    function decrease() {
        let newAmount = quantity - 1;
        if (newAmount < 1) {
            return (quantity = 1);
        }
        decreaseQuantity(_id);
    }

    return (
        <Wrapper>
            <div className="title">
                <img src={images[0]} alt="" />
                <div>
                    <h5>{name}</h5>
                    <h5 className="price-small">{formatPrice(price)}</h5>
                </div>
            </div>
            <h5 className="price">{formatPrice(price)}</h5>
            <div>
                <AmountButton
                    increase={increase}
                    decrease={decrease}
                    amount={quantity}
                />
            </div>
            <h5 className="subtotal">{formatPrice(subtotal)}</h5>
            <button
                className="remove"
                onClick={() => removeProductFromCart(_id)}
            >
                <BiSolidTrashAlt />
            </button>
        </Wrapper>
    );
}
