import styled from 'styled-components';
import ProductItem from './ProductItem';
import { useEffect } from 'react';
import { useProductContext } from '../context/ProductContext';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export default function GridView({ products }) {
    const { wishedProductIds, getWishedProductIds } = useProductContext();

    useEffect(() => {
        getWishedProductIds();
    }, []);

    return (
        <Wrapper>
            {products.map((product) => (
                <ProductItem
                    key={product._id}
                    {...product}
                    wished={wishedProductIds.includes(product._id)}
                />
            ))}
        </Wrapper>
    );
}
