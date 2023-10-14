import { Link } from 'react-router-dom';
import styled from 'styled-components';
import formatPrice from '../utils/formatPrice';

const Wrapper = styled.div`
    display: grid;
    gap: 3rem;
    img {
        width: 100%;
        height: 200px;
        object-fit: cover;

        margin-bottom: 16px;
    }
    h4 {
        margin-bottom: 8px;
    }
    h5 {
        margin-bottom: 12px;
        color: #b99179;
    }
    p {
        margin-bottom: 16px;
        color: #324d67;
        line-height: 2;
    }
    a {
        padding: 4px 8px;
    }
    @media (min-width: 768px) {
        .product-item {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 2rem;
            align-items: center;
        }
    }
`;

export default function ListView({ products }) {
    return (
        <Wrapper>
            {products.map((product) => {
                const { name, price, description, images } = product;
                return (
                    <div className="product-item" key={product._id}>
                        <img src={images[0]} alt="" />
                        <div className="info">
                            <h4>{name}</h4>
                            <h5>{formatPrice(price)}</h5>
                            <p>{description.substring(0, 150)}...</p>
                            <Link className="btn">Details</Link>
                        </div>
                    </div>
                );
            })}
        </Wrapper>
    );
}
