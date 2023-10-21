import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledImg = styled.img`
    width: 100px;
    padding: 8px 0;
`;

export default function Logo() {
    return (
        <Link to={'/'}>
            <StyledImg src="https://tta-next-ecom.s3.ap-northeast-1.amazonaws.com/1697905401211-png" />
        </Link>
    );
}
