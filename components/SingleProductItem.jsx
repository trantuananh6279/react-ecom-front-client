import { useState } from 'react';
import AddToCart from './AddToCart';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import formatPrice from '../utils/formatPrice';
import ProductImages from './ProductImages';
import Stars from './Stars';
import Wrapper from '../styles/SingleProductItem';

export default function SingleProductItem({
    singleProduct,
    id,
    wished = false,
}) {
    const [isBusy, setIsBusy] = useState(false);

    return (
        <Wrapper>
            <button
                className="wished-btn"
                // onClick={(e) => addToWishlist(e, singleProduct._id)}
                disabled={isBusy}
            >
                {wished ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
            <ProductImages images={singleProduct.images} />
            <div className="product-info">
                <h2>{singleProduct.name}</h2>
                <Stars rating={singleProduct.rating} />
                <p className="price">{formatPrice(singleProduct.price)}</p>
                <p className="desc">{singleProduct.description}</p>
                <p className="info">
                    <span>Available : </span>
                    {singleProduct.stock > 0 ? 'In stock' : 'Out stock'}
                </p>
                <p className="info">
                    <span>SKU : </span>
                    {id}
                </p>
                <p className="info">
                    <span>Brand : </span>
                    {singleProduct.company}
                </p>
                <hr />
                {singleProduct.stock === 0 || (
                    <AddToCart singleProduct={singleProduct} />
                )}
            </div>
        </Wrapper>
    );
}
