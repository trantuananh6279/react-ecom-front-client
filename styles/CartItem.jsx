import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 200px auto auto;
    place-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    .title {
        display: grid;
        grid-template-columns: 0.5fr 1.5fr;
        align-items: center;
        gap: 1rem;
        img {
            height: 75px;
            width: 75px;
            object-fit: cover;
        }
        .price-small {
            color: #ab7a5f;
            margin-bottom: 0;
        }
    }
    .amount-btns {
        width: 75px;
        h2 {
            font-size: 16px;
        }
    }
    .remove {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #bb2525;
        color: #fff;
        width: 1.5rem;
        height: 1.5rem;
        border: none;
        border-radius: 3px;
        svg {
            font-size: 14px;
        }
    }
    .subtotal,
    .price {
        display: none;
    }
    @media (min-width: 768px) {
        grid-template-columns: repeat(5, 1fr);
        .title {
            .price-small {
                display: none;
            }
        }
        .price {
            display: block;
            color: #ab7a5f;
            font-weight: 400;
        }
        .subtotal {
            display: block;
            color: #ab7a5f;
            font-weight: 400;
        }
    }
`;

export default Wrapper;
