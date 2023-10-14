import styled from 'styled-components';
import ProductItem from './ProductItem';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export default function GridView({ products }) {
    return (
        <Wrapper>
            {products.map((product) => (
                <ProductItem key={product._id} {...product} />
            ))}
        </Wrapper>
    );
}
