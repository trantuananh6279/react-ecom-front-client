import { Link } from 'react-router-dom';
import StyledImg from '../styles/Logo';

export default function Logo() {
    return (
        <Link to={'/'}>
            <StyledImg src="https://tta-next-ecom.s3.ap-northeast-1.amazonaws.com/1697905401211-png" />
        </Link>
    );
}
