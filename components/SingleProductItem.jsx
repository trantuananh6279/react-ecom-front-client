import { useState } from 'react';
import AddToCart from './AddToCart';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import formatPrice from '../utils/formatPrice';
import ProductImages from './ProductImages';
import Stars from './Stars';
import { customFetch } from '../utils/axios';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    padding: 0 20px 80px;
    .product-info {
        h2 {
            letter-spacing: 0.1rem;
            margin-bottom: 12px;
            font-size: 32px;
        }
        .price {
            margin-bottom: 12px;
            color: #ab7a5f;
            font-size: 1rem;
            font-weight: bold;
        }
        .desc {
            margin-bottom: 20px;
            color: #324d67;
            line-height: 2;
        }
        .info {
            text-transform: capitalize;
            span {
                font-weight: bold;
                display: inline-block;
                min-width: 125px;
                margin-bottom: 20px;
            }
        }
    }
    .wished-btn {
        display: inline-flex;
        align-items: center;
        position: absolute;
        right: 20px;
        top: 0;
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
    @media (min-width: 768px) {
        /* .singleProduct-container { */
        grid-template-columns: 1fr 1fr;
        padding: 0 0 80px;
        .product-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            h2 {
                font-size: 40px;
            }
            .price {
                font-size: 20px;
            }
            .desc {
                font-size: 16px;
            }
        }
        .wished-btn {
            right: 52.5%;
        }
        /* } */
    }
`;

export default function SingleProductItem({ singleProduct, id }) {
    const [isWished, setIsWished] = useState(false);
    const [isBusy, setIsBusy] = useState(false);

    const { name, company, images, rating, stock, price, description } =
        singleProduct;

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
        // <div className="singleProduct-container">
        <Wrapper>
            <button
                className="wished-btn"
                onClick={(e) => addToWishlist(e, id)}
                disabled={isBusy}
            >
                {isWished ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
            <ProductImages images={images} />
            <div className="product-info">
                <h2>{name}</h2>
                <Stars rating={rating} />
                <p className="price">{formatPrice(price)}</p>
                <p className="desc">{description}</p>
                <p className="info">
                    <span>Available : </span>
                    {stock > 0 ? 'In stock' : 'Out stock'}
                </p>
                <p className="info">
                    <span>SKU : </span>
                    {id}
                </p>
                <p className="info">
                    <span>Brand : </span>
                    {company}
                </p>
                <hr />
                <AddToCart singleProduct={singleProduct} />
            </div>
        </Wrapper>
        // </div>
    );
}
