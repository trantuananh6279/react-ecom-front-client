import styled from 'styled-components';
import Center from '../components/Center';
import Breadcrumb from '../components/Breadcrumb';
import Stars from '../components/Stars';
import AddToCart from '../components/AddToCart';
import ProductImages from '../components/ProductImages';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import formatPrice from '../utils/formatPrice';
import { customFetch } from '../utils/axios';

const Wrapper = styled.div`
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
    const [isSingleProductLoading, setSingleProductLoading] = useState(false);
    const [singleProduct, setSingleProduct] = useState({});
    const { id } = useParams();

    const { name, company, images, rating, stock, price, description } =
        singleProduct;

    useEffect(() => {
        setSingleProductLoading(true);
        customFetch
            .get(`/products/${id}`)
            .then((res) => {
                setSingleProduct(res.data);
                setSingleProductLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsProductLoading(false);
            });
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
