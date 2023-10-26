import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
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
    .wished-btn {
        display: inline-flex;
        align-items: center;
        position: absolute;
        right: 20px;
        top: 0;
        padding: 4px;
        border: none;
        outline: none;
        font-size: 24px;
        border-radius: 2px;
        color: red;
        background: #fff;
        z-index: 100;
        cursor: pointer;
    }
    @media (min-width: 768px) {
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
        .wished-btn {
            right: 52.5%;
        }
    }
`;

export default Wrapper;
