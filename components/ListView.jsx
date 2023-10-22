import styled from 'styled-components';
import ListViewItem from './ListviewItem';
import { useEffect } from 'react';
import { useProductContext } from '../context/ProductContext';

const Wrapper = styled.div``;

export default function ListView({ products }) {
    const { wishedProductIds, getWishedProductIds } = useProductContext();

    useEffect(() => {
        getWishedProductIds();
    }, []);

    return (
        <Wrapper>
            {products.map((product) => (
                <ListViewItem
                    key={product._id}
                    {...product}
                    wished={wishedProductIds.includes(product._id)}
                />
            ))}
        </Wrapper>
    );
}
