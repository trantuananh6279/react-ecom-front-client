import styled from 'styled-components';
import { useCartContext } from '../context/CartContext';
import { useEffect, useState } from 'react';
import formatPrice from '../utils/formatPrice';
import UserInfo from './UserInfo';
import { customFetch } from '../utils/axios';
import { toast } from 'react-toastify';
import { getUserFromLocalStorage } from '../utils/localStorage';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
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
    .btn.checkout {
        width: 100%;
        margin-top: 16px;
        padding: 6px 12px;
        font-size: 14px;
        text-align: center;
    }
    @media (min-width: 768px) {
        grid-template-columns: 1.3fr 0.7fr;
    }
`;

const initialValue = {
    name: '',
    email: '',
    city: '',
    postalCode: '',
    streetAddress: '',
    country: '',
};

export default function CartTotals() {
    const { paymentSubtotal, cartProducts, clearCart, setIsPaymentSuccess } =
        useCartContext();
    const [shippingFee, setShippingFee] = useState(1000);
    const [values, setValues] = useState(initialValue);
    const [isAddressLoading, setIsAddressLoading] = useState(true);
    const user = getUserFromLocalStorage();

    function handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        setValues({ ...values, [name]: value });
    }

    async function goToPayment() {
        const { name, email, city, postalCode, streetAddress, country } =
            values;
        if (
            !name ||
            !email ||
            !city ||
            !postalCode ||
            !streetAddress ||
            !country
        ) {
            toast.error('Please fill out all the payment information');
            return;
        }
        const data = { ...values, shippingFee, cartProducts };
        const res = await customFetch.post('/checkout', data);
        await saveAddress(values);
        if (res.data.url) {
            window.location = res.data.url;
        }
    }

    async function saveAddress(addressData) {
        await customFetch.put('/address', addressData);
    }

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (window?.location.href.includes('success')) {
            setIsPaymentSuccess(true);
            clearCart();
        }
    }, []);

    useEffect(() => {
        customFetch
            .get('/address')
            .then((res) => {
                if (res.data) {
                    const {
                        name,
                        email,
                        city,
                        postalCode,
                        streetAddress,
                        country,
                    } = res.data;
                    const userAddress = {
                        name,
                        email,
                        city,
                        postalCode,
                        streetAddress,
                        country,
                    };
                    setValues(userAddress);
                    setIsAddressLoading(false);
                }
            })
            .catch((err) => {
                setIsAddressLoading(false);
            });
    }, []);

    return (
        <Wrapper>
            {isAddressLoading && <Spinner fullWidth={true} />}
            {!isAddressLoading && (
                <UserInfo
                    values={values}
                    setValues={setValues}
                    handleChange={handleChange}
                />
            )}
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
                        Order Total :
                        <span>
                            {formatPrice(paymentSubtotal + shippingFee)}
                        </span>
                    </h4>
                </div>
                {user ? (
                    <button
                        className="btn checkout"
                        type="button"
                        onClick={goToPayment}
                    >
                        Continue to payment
                    </button>
                ) : (
                    <Link to={'/login'} className="btn checkout">
                        Login
                    </Link>
                )}
            </div>
        </Wrapper>
    );
}
