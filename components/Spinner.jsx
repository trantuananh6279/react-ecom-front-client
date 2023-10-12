import { PacmanLoader } from 'react-spinners';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 30px 0;
`;

export default function Spinner({ fullWidth }) {
    if (fullWidth) {
        return (
            <Wrapper className="hidden md:w-full md:flex md:justify-center">
                <PacmanLoader color={'#ab7a5f'} speedMultiplier={1} />
            </Wrapper>
        );
    }
    return <PacmanLoader color={'#ab7a5f'} speedMultiplier={1} />;
}
