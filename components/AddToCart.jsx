import AmountButton from './AmountButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import Wrapper from '../styles/AddToCart';

export default function AddToCart({ singleProduct }) {
    const { _id, stock } = singleProduct;
    const [amount, setAmount] = useState(1);
    const { addToCart } = useCartContext();

    function increase() {
        let newAmount = amount + 1;
        if (newAmount > stock) {
            newAmount = stock;
        }
        setAmount(newAmount);
    }
    function decrease() {
        let newAmount = amount - 1;
        if (newAmount < 1) {
            newAmount = 1;
        }
        setAmount(newAmount);
    }

    return (
        <Wrapper>
            <AmountButton
                increase={increase}
                decrease={decrease}
                amount={amount}
            />
            <Link
                to="/cart"
                className="btn"
                onClick={() => addToCart(_id, amount)}
            >
                ADD TO CART
            </Link>
        </Wrapper>
    );
}
