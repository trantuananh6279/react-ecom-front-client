import styled from 'styled-components';

const Wrapper = styled.div`
    .img-container {
        position: relative;
        border-radius: 4px;
        display: block;
        background-color: #000;
        height: 225px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        &:hover img {
            opacity: 0.8;
        }
        button {
            display: flex;
            align-items: center;
            position: absolute;
            right: 0;
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
    }
    img {
        width: 100%;
        border-radius: 4px;
        display: block;
        transition: all 0.3s linear;
        height: 100%;
        object-fit: cover;
    }
    .content {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
        .price {
            color: var(--primary-color);
        }
    }
`;

export default Wrapper;
