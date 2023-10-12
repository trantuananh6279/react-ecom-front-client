import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    .mainImg {
        height: 300px;
        border-radius: 4px;
        object-fit: cover;
        width: 100%;
    }
    .gallery {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem;
        margin-top: 16px;
        img {
            height: 50px;
            object-fit: cover;
            width: 100%;
            border-radius: 4px;
            cursor: pointer;
        }
        .active {
            border: 2px solid #ab7a5f;
        }
    }
    @media (min-width: 768px) {
        .mainImg {
            height: 500px;
        }
        .gallery {
            img {
                height: 75px;
            }
        }
    }
`;

export default function ProductImages({ images = [] }) {
    const [main, setMain] = useState(images[0]);

    return (
        <Wrapper>
            <img className="mainImg" src={main} alt="" />
            <div className="gallery">
                {images.length > 0 &&
                    images.map((image, index) => {
                        return (
                            <img
                                key={index}
                                src={image}
                                alt=""
                                className={image === main ? 'active' : 'null'}
                                onClick={() => setMain(images[index])}
                            />
                        );
                    })}
            </div>
        </Wrapper>
    );
}
