import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export default Wrapper;
