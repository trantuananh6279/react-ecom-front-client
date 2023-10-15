import { Link } from 'react-router-dom';
import styled from 'styled-components';
import formatPrice from '../utils/formatPrice';

const Wrapper = styled.div`
    .img-container {
        border-radius: 4px;
        display: block;
        background-color: #000;
        height: 225px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        &:hover img {
            opacity: 0.8;
        }
    }

    img {
        width: 100%;
        border-radius: 4px;
        display: block;
        transition: all 0.3s linear;
        height: 100%;
        object-fit: cover;
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

export default function ProductItem({ _id, images, name, price }) {
    return (
        <Wrapper>
            <div className="img-container">
                <Link to={`/products/${_id}`}>
                    <img src={images[0]} />
                </Link>
            </div>
            <div className="content">
                <span>{name}</span>
                <span className="price">{formatPrice(price)}</span>
            </div>
        </Wrapper>
    );
}
