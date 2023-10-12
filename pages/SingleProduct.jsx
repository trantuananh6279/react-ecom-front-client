import styled from 'styled-components';
import Center from '../components/Center';
import Breadcrumb from '../components/Breadcrumb';
import Stars from '../components/Stars';
import AddToCart from '../components/AddToCart';
import ProductImages from '../components/ProductImages';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useProductContext } from '../context/ProductContext';
import Spinner from '../components/Spinner';
import formatPrice from '../utils/formatPrice';

const Wrapper = styled.div`
    margin-top: 76.8px;
    .back-btn {
        margin: 80px 0 30px 20px;
        padding: 6px 12px;
    }
    .singleProduct-container {
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
                font-size: 14px;
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
    }
    @media (min-width: 768px) {
        .back-btn {
            margin: 80px 0 30px 0;
        }
        .singleProduct-container {
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
        }
    }
`;

export default function SingleProductPage() {
    const { id } = useParams();
    const { fetchSingleProduct, isSingleProductLoading, singleProduct } =
        useProductContext();
    const { name, company, images, rating, stock, price, description } =
        singleProduct;

    useEffect(() => {
        fetchSingleProduct(id);
    }, [id]);

    return (
        <Wrapper>
            {isSingleProductLoading && <Spinner fullWidth={true} />}
            {!isSingleProductLoading && (
                <>
                    <Breadcrumb title={name} product={'products'} />
                    <Center>
                        <Link to={'/products'} className="btn back-btn">
                            BACK TO PRODUCT
                        </Link>
                        <div className="singleProduct-container">
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
                                <AddToCart {...singleProduct} />
                            </div>
                        </div>
                    </Center>
                </>
            )}
        </Wrapper>
    );
}
