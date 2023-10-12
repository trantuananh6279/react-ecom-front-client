import styled from 'styled-components';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import Center from './Center';
import { useProductContext } from '../context/ProductContext';
import Spinner from './Spinner';

const Wrapper = styled.div`
    background-color: #f1f5f8;
    padding: 6rem;
    text-align: center;
    .title {
        text-align: center;
        h2 {
            font-size: 40px;
            margin-bottom: 12px;
            letter-spacing: 0.1rem;
        }
        .underline {
            width: 7rem;
            height: 0.25rem;
            background-color: var(--primary-color);
            margin: 0 auto;
        }
    }
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 3rem;
        margin: 64px 0;
    }
    button {
        display: block;
        margin: 0 auto;
    }
    @media (max-width: 767px) {
        padding: 6rem 20px;
        .container {
            grid-template-columns: 1fr;
        }
        .title {
            h2 {
                font-size: 32px;
            }
        }
    }
`;

export default function Featured() {
    const { featuredProducts, isProductLoading } = useProductContext();

    return (
        <Wrapper>
            <Center>
                <div className="title">
                    <h2>Featured Products</h2>
                    <div className="underline"></div>
                </div>
                {isProductLoading && <Spinner fullWidth={true} />}
                {!isProductLoading && (
                    <div className="container">
                        {featuredProducts.length > 1 &&
                            featuredProducts
                                .slice(0, 3)
                                .map((product) => (
                                    <ProductItem
                                        key={product._id}
                                        {...product}
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
