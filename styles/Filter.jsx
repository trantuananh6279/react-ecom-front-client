import styled from 'styled-components';

const Wrapper = styled.div`
    font-size: 14px;
    .form-control {
        margin-bottom: 1.25rem;
        .search-input {
            width: 100%;
            padding: 8px;
            border: none;
            letter-spacing: 0.1rem;
            background-color: #f1f5f8;
        }
        h5 {
            margin-bottom: 0.5rem;
            font-size: 16px;
        }
        button {
            display: block;
            padding: 0.25rem 0;
            margin: 0.25rem 0;
            color: #617d98;
            font-size: 14px;
            border: none;
            letter-spacing: 0.1rem;
            text-transform: capitalize;
            background-color: transparent;
            cursor: pointer;
            border-bottom: 1px solid transparent;
        }
        .active {
            border-color: #617d98;
        }
        .price {
            color: #324d67;
        }
        .company {
            text-transform: capitalize;
        }
    }
    .clear-btn {
        background: #bb2525;
        color: #fff;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        border: none;
        padding: 4px 8px;
        font-size: 14px;
        letter-spacing: 0.1rem;
    }
    @media (min-width: 768px) {
        .content {
            position: sticky;
            top: 1rem;
        }
    }
`;

export default Wrapper;
