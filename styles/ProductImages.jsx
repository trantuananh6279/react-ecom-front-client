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

export default Wrapper;
