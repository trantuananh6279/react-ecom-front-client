import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - (20vh - 12px));
    .err-container {
        text-align: center;
        margin: 0 auto;
        width: 100%;
        .title {
            font-size: 20px;
        }
        h2 {
            margin: 16px 0 20px;
        }
        a {
            margin-top: 20px;
            padding: 6px 12px;
        }
    }
    @media (min-width: 768px) {
        min-height: calc(100vh - (20vh - 42px));
    }
`;

export default function ErrorPage() {
    return (
        <Wrapper>
            <div className="err-container">
                <p className="title">404</p>
                <h2>Page not found</h2>
                <p>Sorry, we couldn’t find the page you’re looking for.</p>
                <Link to={'/'} className="btn">
                    Go back home
                </Link>
            </div>
        </Wrapper>
    );
}
