import AmountButton from './AmountButton';
import { BiSolidTrashAlt } from 'react-icons/bi';
import formatPrice from '../utils/formatPrice';
import { useCartContext } from '../context/CartContext';
import Wrapper from '../styles/CartItem';

export default function CartItem({ product }) {
    const { cartProducts, addToCart, decreaseQuantity, removeProductFromCart } =
        useCartContext();
    let subtotal =
        cartProducts.filter((id) => id === product._id).length * product.price;
    let quantity = cartProducts.filter((id) => id === product._id).length;

    function increase() {
        let newAmount = quantity + 1;
        if (newAmount >= stock) {
            return;
        }
        addToCart(product._id);
    }

    function decrease() {
        let newAmount = quantity - 1;
        if (newAmount < 1) {
            return (quantity = 1);
        }
        decreaseQuantity(product._id);
    }

    return (
        <Wrapper>
            <div className="title">
                <img src={product.images[0]} alt="" />
                <div>
                    <h5>{product.name}</h5>
                    <h5 className="price-small">
                        {formatPrice(product.price)}
                    </h5>
                </div>
            </div>
            <h5 className="price">{formatPrice(product.price)}</h5>
            <div>
                <AmountButton
                    increase={increase}
                    decrease={decrease}
                    amount={quantity}
                />
            </div>
            <h5 className="subtotal">{formatPrice(subtotal)}</h5>
            <button
                className="remove"
                onClick={() => removeProductFromCart(product._id)}
            >
                <BiSolidTrashAlt />
            </button>
        </Wrapper>
    );
}
