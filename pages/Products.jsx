import styled from 'styled-components';
import Center from '../components/Center';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import ProductContainer from '../components/ProductContainer';
import Breadcrumb from '../components/Breadcrumb';

const Wrapper = styled.div`
    .product-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
        margin: 4rem auto;
        padding: 0 20px;
        min-height: calc(100vh - (20vh + 10rem));
    }
    @media (min-width: 768px) {
        .product-container {
            grid-template-columns: 200px 1.5fr;
            padding: 0;
        }
    }
`;

export default function ProductsPage() {
    return (
        <Wrapper>
            <Breadcrumb title={'products'} />
            <Center>
                <div className="product-container">
                    <Filter />
                    <div>
                        <Sort />
                        <ProductContainer />
                    </div>
                </div>
            </Center>
        </Wrapper>
    );
}
