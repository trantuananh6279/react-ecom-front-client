import { AiTwotoneStar, AiOutlineStar } from 'react-icons/ai';
import { BiSolidStarHalf } from 'react-icons/bi';
import Wrapper from '../styles/Stars';

export default function Stars({ rating }) {
    const tempStar = Array.from({ length: 5 }, (_, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {rating > number ? (
                    <AiTwotoneStar />
                ) : rating > index ? (
                    <BiSolidStarHalf />
                ) : (
                    <AiOutlineStar />
                )}
            </span>
        );
    });

    return (
        <Wrapper>
            <div className="star-container">{tempStar}</div>
            <span>(33 customer reviews)</span>
        </Wrapper>
    );
}
