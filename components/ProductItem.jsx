import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    img {
        width: 100%;
        border-radius: 4px;
    }
    .content {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
        .price {
            color: var(--primary-color);
        }
    }
`;

export default function ProductItem() {
    return (
        <Wrapper>
            <div>
                <Link>
                    <img src="https://www.course-api.com/images/store/product-7.jpeg" />
                </Link>
                <div className="content">
                    <span>Entertainment Center</span>
                    <span className="price">$599.99</span>
                </div>
            </div>
        </Wrapper>
    );
}
