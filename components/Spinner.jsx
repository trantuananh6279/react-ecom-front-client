import { PacmanLoader } from 'react-spinners';
import Wrapper from '../styles/Spinner';

export default function Spinner({ fullWidth }) {
    if (fullWidth) {
        return (
            <Wrapper className="hidden md:w-full md:flex md:justify-center">
                <PacmanLoader color={'#eaded7'} speedMultiplier={1} />
            </Wrapper>
        );
    }
    return <PacmanLoader color={'#eaded7'} speedMultiplier={1} />;
}
