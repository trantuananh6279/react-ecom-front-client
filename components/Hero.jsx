import Center from './Center';
import { Link } from 'react-router-dom';
import Wrapper from '../styles/Hero';

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
