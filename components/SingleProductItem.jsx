import { useState } from 'react';
import AddToCart from './AddToCart';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import formatPrice from '../utils/formatPrice';
import ProductImages from './ProductImages';
import Stars from './Stars';
import Wrapper from '../styles/SingleProductItem';
import { useProductContext } from '../context/ProductContext';
import { customFetch } from '../utils/axios';

export default function SingleProductItem({
    singleProduct: product,
    id,
    wished = false,
    setSingleProduct,
}) {
    const [isBusy, setIsBusy] = useState(false);

    async function addToWishlist(e, productId) {
        e.preventDefault();
        e.stopPropagation();
        setIsBusy(true);
        await customFetch
            .post('/wish-list', { productId })
            .then(() => {
                setSingleProduct({ ...product, isLiked: !product.isLiked });
            })
            .finally(() => setIsBusy(false));
    }

    return (
        <Wrapper>
            <button
                className="wished-btn"
                onClick={(e) => addToWishlist(e, product._id)}
                disabled={isBusy}
            >
                {wished ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
            <ProductImages images={product.images} />
            <div className="product-info">
                <h2>{product.name}</h2>
                <Stars rating={product.rating} />
                <p className="price">{formatPrice(product.price)}</p>
                <p className="desc">{product.description}</p>
                <p className="info">
                    <span>Available : </span>
                    {product.stock > 0 ? 'In stock' : 'Out stock'}
                </p>
                <p className="info">
                    <span>SKU : </span>
                    {id}
                </p>
                <p className="info">
                    <span>Brand : </span>
                    {product.company}
                </p>
                <hr />
                {product.stock === 0 || <AddToCart singleProduct={product} />}
            </div>
        </Wrapper>
    );
}
