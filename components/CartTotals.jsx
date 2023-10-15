import styled from 'styled-components';
import { useCartContext } from '../context/CartContext';
import { useState } from 'react';
import formatPrice from '../utils/formatPrice';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    .user-info {
        padding: 1rem;
        border: 1px solid #ccc;
    }
    .cartTotal-container {
        padding: 1rem 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        h5,
        p,
        h4 {
            display: grid;
            grid-template-columns: 200px 1fr;
        }
        h5 {
            margin-bottom: 12px;
        }
        p {
            margin-bottom: 20px;
        }
        h4 {
            margin: 32px 0 12px;
        }
    }
    @media (min-width: 768px) {
        grid-template-columns: 1.3fr 0.7fr;
    }
`;

export default function CartTotals() {
    const { paymentSubtotal } = useCartContext();
    // get shipping fee from server
    const [shippingFee, setShippingFee] = useState(1000);

    return (
        <Wrapper>
            <div className="user-info">user info</div>
            <div>
                <div className="cartTotal-container">
                    <h5>
                        Subtotal : <span>{formatPrice(paymentSubtotal)}</span>
                    </h5>
                    <p>
                        Shipping fee : <span>{formatPrice(shippingFee)}</span>
                    </p>
                    <hr />
                    <h4>
                        Order Total :{' '}
                        <span>
                            {formatPrice(paymentSubtotal + shippingFee)}
                        </span>
                    </h4>
                </div>
                <button className="btn checkout">Continue to payment</button>
            </div>
        </Wrapper>
    );
}
