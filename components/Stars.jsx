import styled from 'styled-components';
import { AiTwotoneStar, AiOutlineStar } from 'react-icons/ai';
import { BiSolidStarHalf } from 'react-icons/bi';

const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 12px;
    .star-container {
        svg {
            font-size: 20px;
            color: rgb(255, 185, 0);
        }
    }
`;

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
