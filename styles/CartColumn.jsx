import styled from 'styled-components';

const Wrapper = styled.div`
    display: none;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        place-items: center;
        gap: 1rem;
        h5 {
            color: #617d98;
        }
    }
`;

export default Wrapper;
