import styled from 'styled-components';

const Wrapper = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #222;
    gap: 8px;
    height: 80px;
    color: #fff;
    letter-spacing: 1.5px;
    span {
        color: #ab7a5f;
    }
`;

export default function Footer() {
    return (
        <Wrapper>
            <p>
                © {new Date().getFullYear()} <span>ComfySloth </span>
            </p>
            <p>All rights reserved</p>
        </Wrapper>
    );
}
