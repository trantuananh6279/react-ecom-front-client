import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import Center from './Center';
import Spinner from './Spinner';
import { useEffect } from 'react';
import { useProductContext } from '../context/ProductContext';
import Wrapper from '../styles/Featured';

export default function Featured() {
    const { featuredProducts, getFeaturedProduct, isFeaturedProductLoading } =
        useProductContext();

    useEffect(() => {
        getFeaturedProduct();
    }, []);

    return (
        <Wrapper>
            <Center>
                <div className="title">
                    <h2>Featured Products</h2>
                    <div className="underline"></div>
                </div>
                {isFeaturedProductLoading && <Spinner fullWidth={true} />}
                {!isFeaturedProductLoading && (
                    <div className="container">
                        {featuredProducts.length > 0 &&
                            featuredProducts
                                .slice(0, 3)
                                .map((product) => (
                                    <ProductItem
                                        key={product._id}
                                        product={product}
                                        wished={product.isLiked}
                                    />
                                ))}
                    </div>
                )}
                <Link to={'/products'} className="btn">
                    ALL PRODUCT
                </Link>
            </Center>
        </Wrapper>
    );
}
