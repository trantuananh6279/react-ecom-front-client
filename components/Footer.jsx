import Wrapper from '../styles/Footer';

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
