import styled from 'styled-components';
import Center from './Center';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10rem;
    align-items: center;
    height: calc(100vh - 80px);
    h1 {
        margin-bottom: 32px;
        line-height: 1;
        letter-spacing: 0.2rem;
    }
    p {
        font-size: 20px;
        margin-bottom: 32px;
        color: #617d98;
        line-height: 2;
    }
    .img-wrap {
        position: relative;
        .heroImg1 {
            width: 100%;
            height: 550px;
            display: block;
            border-radius: 4px;
            object-fit: cover;
        }
        .heroImg2 {
            width: 250px;
            position: absolute;
            bottom: 0;
            left: -120px;
            border-radius: 4px;
            object-fit: cover;
        }
    }
    .img-wrap::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: -34px;
        background-color: #decbc0;
        width: 10%;
        height: 80%;
        z-index: -1;
        border-radius: 4px;
    }
    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        place-items: center;
        padding: 0 20px;
        height: 60vh;
        width: 90vw;
        h1 {
            font-size: 40px;
            letter-spacing: 0.1rem;
        }
        p {
            font-size: 16px;
        }
        .img-wrap {
            display: none;
        }
    }
`;

export default function Hero() {
    return (
        <Center>
            <Wrapper>
                <div className="content">
                    <h1>Design Your Comfort Zone</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Iusto, at sed omnis corporis doloremque possimus
                        velit! Repudiandae nisi odit, aperiam odio ducimus,
                        obcaecati libero et quia tempora excepturi quis alias?
                    </p>
                    <Link to={'/products'} className="btn">
                        SHOP NOW
                    </Link>
                </div>
                <div className="img-wrap">
                    <img
                        className="heroImg1"
                        src="https://tta-next-ecom.s3.ap-northeast-1.amazonaws.com/1697905421065-jpeg"
                    />
                    <img
                        className="heroImg2"
                        src="https://tta-next-ecom.s3.ap-northeast-1.amazonaws.com/1697905421743-jpeg"
                    />
                </div>
            </Wrapper>
        </Center>
    );
}
