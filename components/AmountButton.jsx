import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 140px;
    place-items: center;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;
        font-size: 20px;
        padding: 10px;
        cursor: pointer;
        svg {
            font-size: 16px;
            color: #000;
        }
    }
    h2 {
        margin-bottom: 0 !important;
    }
`;

export default function AmountButton({ increase, decrease, amount }) {
    return (
        <Wrapper>
            <button onClick={decrease}>
                <AiOutlineMinus />
            </button>
            <h2>{amount}</h2>
            <button onClick={increase}>
                <AiOutlinePlus />
            </button>
        </Wrapper>
    );
}
