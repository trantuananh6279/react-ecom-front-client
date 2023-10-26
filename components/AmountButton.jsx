import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Wrapper from '../styles/AmountButton';

export default function AmountButton({ increase, decrease, amount }) {
    return (
        <Wrapper className="amount-btns">
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
