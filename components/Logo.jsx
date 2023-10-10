import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledImg = styled.img`
    width: 100px;
    padding: 8px 0;
`;

export default function Logo() {
    return (
        <Link to={'/'}>
            <StyledImg src="https://the-vivid-theme.myshopify.com/cdn/shop/files/vivid-logo2.png?v=1683567381&width=500" />
        </Link>
    );
}
