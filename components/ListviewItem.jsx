import styled from 'styled-components';
import { customFetch } from '../utils/axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import formatPrice from '../utils/formatPrice';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Wrapper = styled.div`
    display: grid;
    gap: 3rem;
    margin-bottom: 16px;
    img {
        width: 100%;
        height: 200px;
        object-fit: cover;

        margin-bottom: 16px;
    }
    h4 {
        margin-bottom: 8px;
    }
    h5 {
        margin-bottom: 12px;
        color: #b99179;
    }
    p {
        margin-bottom: 16px;
        color: #324d67;
        line-height: 2;
    }
    .img-container {
        position: relative;
        display: block;
        button {
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            right: 0;
            padding: 4px;
            border: none;
            outline: none;
            font-size: 24px;
            border-radius: 2px;
            color: red;
            background: #fff;
            z-index: 100;
            cursor: pointer;
        }
    }

    @media (min-width: 768px) {
        .product-item {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 2rem;
            align-items: center;
        }
    }
`;

export default function ListViewItem({
    _id,
    name,
    price,
    description,
    images,
    wished = false,
    onRemoveFromWishlist = () => {},
}) {
    const [isWished, setIsWished] = useState(wished);
    const [isBusy, setIsBusy] = useState(false);

    async function addToWishlist(e, productId) {
        console.log(productId);
        e.preventDefault();
        e.stopPropagation();
        const nextValue = !isWished;
        // if (nextValue === false && onRemoveFromWishlist) {
        //     onRemoveFromWishlist(_id);
        // }
        setIsBusy(true);
        await customFetch.post('/wish-list', { productId });
        setIsBusy(false);
        setIsWished(nextValue);
    }

    return (
        <Wrapper>
            <div className="product-item" key={_id}>
                <Link to={`/products/${_id}`} className="img-container">
                    <button
                        onClick={(e) => addToWishlist(e, _id)}
                        disabled={isBusy}
                    >
                        {isWished ? <AiFillHeart /> : <AiOutlineHeart />}
                    </button>
                    <img src={images[0]} alt="" />
                </Link>
                <div className="info">
                    <h4>{name}</h4>
                    <h5>{formatPrice(price)}</h5>
                    <p>{description.substring(0, 150)}...</p>
                    <Link className="btn">Details</Link>
                </div>
            </div>
        </Wrapper>
    );
}
