import { useState } from 'react';
import { Link } from 'react-router-dom';
import formatPrice from '../utils/formatPrice';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { customFetch } from '../utils/axios';
import Wrapper from '../styles/ListviewItem';
import { useProductContext } from '../context/ProductContext';
import { getUserFromLocalStorage } from '../utils/localStorage';
import { toast } from 'react-toastify';

export default function ListViewItem({ product, wished = false, _id }) {
    const {
        filteredProducts,
        setFilteredProducts,
        featuredProducts,
        setFeaturedProducts,
        removeProductFromWishlist,
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
                const tempProducts = [...filteredProducts];
                const tempProductIndex = tempProducts.findIndex(
                    (n) => n._id === productId
                );
                tempProducts[tempProductIndex].isLiked =
                    !tempProducts[tempProductIndex].isLiked;
                setFilteredProducts(tempProducts);

                const nextValue = !wished;
                if (nextValue === false) {
                    removeProductFromWishlist(_id);
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
