import styled from 'styled-components';
import ListViewItem from './ListviewItem';

const Wrapper = styled.div``;

export default function ListView({ products }) {
    return (
        <Wrapper>
            {products.map((product) => (
                <ListViewItem
                    key={product._id}
                    product={product}
                    wished={product.isLiked}
                />
            ))}
        </Wrapper>
    );
}
