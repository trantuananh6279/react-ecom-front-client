import { useState } from 'react';
import Wrapper from '../styles/ProductImages';

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
