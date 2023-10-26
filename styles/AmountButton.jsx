import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 140px;
    place-items: center;
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;
        font-size: 20px;
        padding: 10px;
        cursor: pointer;
        svg {
            font-size: 16px;
            color: #000;
        }
    }
    h2 {
        margin-bottom: 0 !important;
    }
`;

export default Wrapper;
