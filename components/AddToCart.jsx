import styled from 'styled-components';
import AmountButton from './AmountButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    margin-top: 2rem;
    .btn {
        margin-top: 16px;
        padding: 8px 16px;
        font-size: 14px;
    }
`;

export default function AddToCart({ stock }) {
    const [amount, setAmount] = useState(1);

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
            <Link to="#" className="btn">
                ADD TO CART
            </Link>
        </Wrapper>
    );
}
