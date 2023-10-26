import { useState } from 'react';
import { Link } from 'react-router-dom';
import formatPrice from '../utils/formatPrice';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { customFetch } from '../utils/axios';
import Wrapper from '../styles/ListviewItem';

export default function ListViewItem({ product, wished = false }) {
    const [isBusy, setIsBusy] = useState(false);

    // async function addToWishlist(e, productId) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     setIsBusy(true);
    //     await customFetch
    //         .post('/wish-list', { productId })
    //         .then(() => {
    //             const tempProducts = [...filteredProducts];
    //             const tempProductIndex = tempProducts.findIndex(
    //                 (n) => n._id === productId
    //             );
    //             tempProducts[tempProductIndex].isLiked =
    //                 !tempProducts[tempProductIndex].isLiked;
    //             setFilteredProducts(tempProducts);

    //             if (product.featured === true) {
    //                 const tempFeaturedProducts = [...featuredProducts];
    //                 const tempFeaturedProductIndex =
    //                     tempFeaturedProducts.findIndex(
    //                         (n) => n._id === productId
    //                     );
    //                 tempFeaturedProducts[tempFeaturedProductIndex].isLiked =
    //                     !tempFeaturedProducts[tempFeaturedProductIndex].isLiked;
    //                 setFeaturedProducts(tempFeaturedProducts);
    //             }
    //         })
    //         .finally(() => setIsBusy(false));
    // }

    return (
        <Wrapper>
            <div className="product-item" key={product._id}>
                <Link to={`/products/${product._id}`} className="img-container">
                    <button
                        onClick={(e) => addToWishlist(e, product._id)}
                        disabled={isBusy}
                    >
                        {wished ? <AiFillHeart /> : <AiOutlineHeart />}
                    </button>
                    <img src={product.images[0]} alt="" />
                </Link>
                <div className="info">
                    <h4>{product.name}</h4>
                    <h5>{formatPrice(product.price)}</h5>
                    <p>{product.description.substring(0, 150)}...</p>
                    <Link className="btn">Details</Link>
                </div>
            </div>
        </Wrapper>
    );
}
