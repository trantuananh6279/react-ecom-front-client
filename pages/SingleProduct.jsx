import styled from 'styled-components';
import Center from '../components/Center';
import Breadcrumb from '../components/Breadcrumb';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import { customFetch } from '../utils/axios';
import SingleProductItem from '../components/SingleProductItem';

const Wrapper = styled.div`
    .back-btn {
        margin: 80px 0 30px 20px;
        padding: 6px 12px;
    }

    @media (min-width: 768px) {
        .back-btn {
            margin: 80px 0 30px 0;
        }
    }
`;

export default function SingleProductPage() {
    const [isSingleProductLoading, setSingleProductLoading] = useState(false);
    const [singleProduct, setSingleProduct] = useState({});
    const { id } = useParams();

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
                    <Breadcrumb
                        title={singleProduct.name}
                        product={'products'}
                    />
                    <Center>
                        <Link to={'/products'} className="btn back-btn">
                            BACK TO PRODUCT
                        </Link>
                        <SingleProductItem
                            singleProduct={singleProduct}
                            id={id}
                        />
                    </Center>
                </>
            )}
        </Wrapper>
    );
}
