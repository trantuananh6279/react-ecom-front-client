import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.75rem;
    margin-bottom: 32px;
    .btn-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 50px;
        gap: 0.5rem;
        button {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 24px;
            width: 24px;
            background-color: #fff;
            border: 1px solid #555555;
            cursor: pointer;
            svg {
                font-size: 16px;
            }
        }
        .active {
            background-color: #222;
            svg {
                color: #fff;
            }
        }
    }
    p {
        color: #324d67;
    }
    .sort-container {
        span {
            margin-right: 10px;
        }
        .sort-input {
            padding: 4px 8px;
            text-transform: capitalize;
            font-size: 16px;
            border: none;
        }
    }
    @media (min-width: 768px) {
        grid-template-columns: auto auto 1fr auto;
        align-items: center;
        gap: 2rem;
        hr {
            height: 1px;
        }
    }
`;

export default Wrapper;
