import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    gap: 3rem;
    margin-bottom: 16px;
    img {
        width: 100%;
        height: 200px;
        object-fit: cover;

        margin-bottom: 16px;
    }
    h4 {
        margin-bottom: 8px;
    }
    h5 {
        margin-bottom: 12px;
        color: #b99179;
    }
    p {
        margin-bottom: 16px;
        color: #324d67;
        line-height: 2;
    }
    .img-container {
        position: relative;
        display: block;
        button {
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            right: 0;
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
    }

    @media (min-width: 768px) {
        .product-item {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 2rem;
            align-items: center;
        }
    }
`;

export default Wrapper;
