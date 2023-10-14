import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Center from './Center';

const Wrapper = styled.div`
    background-color: #eaded7;
    .pageHero-container {
        display: flex;
        align-items: center;
        padding: 0 20px;
        min-height: 20vh;
        width: 100%;
        h3 {
            margin: 0;
            letter-spacing: 0.1rem;
            font-size: 24px;
        }
        a {
            color: #795744;
            padding: 0.5rem;
            transition: all 0.3s linear;
        }
        a:hover {
            color: #453227;
        }
        span {
            padding-left: 0.5rem;
        }
    }
    @media (min-width: 768px) {
        .pageHero-container {
            padding: 0;
            h3 {
                font-size: 32px;
            }
        }
    }
`;

export default function Breadcrumb({ title, product }) {
    return (
        <Wrapper>
            <Center>
                <div className="pageHero-container">
                    <h3>
                        <Link to={'/'}>Home</Link>
                        {product && (
                            <Link to={'/products'}>/ Products</Link>
                        )}/ <span>{title}</span>
                    </h3>
                </div>
            </Center>
        </Wrapper>
    );
}
