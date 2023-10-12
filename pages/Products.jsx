import styled from 'styled-components';
import Center from '../components/Center';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1.5fr;
    margin-top: 76.8px;
`;

export default function ProductsPage() {
    return (
        <Center>
            <Wrapper>
                <div>Search</div>
                <div>
                    <div>Sort</div>
                    <div>Product</div>
                </div>
            </Wrapper>
        </Center>
    );
}
