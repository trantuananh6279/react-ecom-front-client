import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: var(--primary-color);
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    a {
        padding: 12px 24px;
        color: #fff;
        display: block;
        width: 100%;
    }
`;

export default function Button({ children, ...rest }) {
    return <StyledButton {...rest}>{children}</StyledButton>;
}
