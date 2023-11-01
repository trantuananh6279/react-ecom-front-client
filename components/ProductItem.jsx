import { Link } from 'react-router-dom';
import formatPrice from '../utils/formatPrice';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';
import { customFetch } from '../utils/axios';
import { useProductContext } from '../context/ProductContext';
import Wrapper from '../styles/ProductItem';
import { getUserFromLocalStorage } from '../utils/localStorage';
import { toast } from 'react-toastify';

export default function ProductItem({ product, wished = false }) {
    const {
        filteredProducts,
        setFilteredProducts,
        featuredProducts,
        setFeaturedProducts,
    } = useProductContext();
    const [isBusy, setIsBusy] = useState(false);
    const user = getUserFromLocalStorage();

    async function addToWishlist(e, productId) {
        e.preventDefault();
        e.stopPropagation();
        if (!user) {
            toast.error('Please login to add your wishlist');
            return;
        }
        setIsBusy(true);
        await customFetch
            .post('/wish-list', { productId })
            .then(() => {
                if (filteredProducts) {
                    const tempProducts = [...filteredProducts];
                    const tempProductIndex = tempProducts.findIndex(
                        (n) => n._id === productId
                    );
                    tempProducts[tempProductIndex].isLiked =
                        !tempProducts[tempProductIndex].isLiked;
                    setFilteredProducts(tempProducts);
                }
                if (product.featured === true) {
                    const tempFeaturedProducts = [...featuredProducts];
                    const tempFeaturedProductIndex =
                        tempFeaturedProducts.findIndex(
                            (n) => n._id === productId
                        );
                    tempFeaturedProducts[tempFeaturedProductIndex].isLiked =
                        !tempFeaturedProducts[tempFeaturedProductIndex].isLiked;
                    setFeaturedProducts(tempFeaturedProducts);
                }
            })
            .finally(() => setIsBusy(false));
    }

    return (
        <Wrapper>
            <Link className="img-container" to={`/products/${product._id}`}>
                <button
                    onClick={(e) => addToWishlist(e, product._id)}
                    disabled={isBusy}
                >
                    {wished ? <AiFillHeart /> : <AiOutlineHeart />}
                </button>
                <img src={product.images[0]} />
            </Link>
            <div className="content">
                <span>{product.name}</span>
                <span className="price">{formatPrice(product.price)}</span>
            </div>
        </Wrapper>
    );
}
