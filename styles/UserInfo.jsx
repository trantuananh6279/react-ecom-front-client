import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 1rem;
    border: 1px solid #ccc;
    input {
        width: 100%;
        padding: 6px 12px;
        margin-top: 6px;
        border: none;
        border-bottom: 1px solid #ccc;
        outline: none;
    }
    input:nth-child(4) {
        width: 30%;
    }
    input:nth-child(5) {
        width: 70%;
    }
    @media (min-width: 768px) {
        input:nth-child(6),
        input:nth-child(7) {
            width: 50%;
        }
    }
`;

export default Wrapper;
