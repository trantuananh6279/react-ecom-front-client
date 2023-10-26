import Center from './Center';
import Logo from './Logo';
import { links } from '../utils/contant';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaShoppingCart, FaUserPlus, FaUserMinus } from 'react-icons/fa';
import { useCartContext } from '../context/CartContext';
import {
    getUserFromLocalStorage,
    removeUserFromLocalStorage,
} from '../utils/localStorage';
import { useProductContext } from '../context/ProductContext';
import Wrapper from '../styles/Navbar';

export default function Navbar() {
    const { toggleSidebar } = useProductContext();
    const { cartProducts } = useCartContext();
    const user = getUserFromLocalStorage();

    return (
        <Center>
            <Wrapper>
                <div className="nav-header">
                    <Logo />
                    <button onClick={toggleSidebar}>
                        <AiOutlineMenu />
                    </button>
                </div>
                <ul>
                    {links.map((link) => {
                        const { id, url, text } = link;
                        return (
                            <li key={id}>
                                <Link to={url}>{text}</Link>
                            </li>
                        );
                    })}
                    {user && (
                        <li>
                            <Link to={'/wishlist'}>Wishlist</Link>
                        </li>
                    )}
                </ul>
                <div className="action-wrap">
                    <Link to={'/cart'} className="cart-btn">
                        Cart
                        <FaShoppingCart />
                        <span>{cartProducts.length}</span>
                    </Link>
                    {user ? (
                        <Link
                            to={'/login'}
                            onClick={removeUserFromLocalStorage}
                            className="login-btn"
                        >
                            Logout
                            <FaUserMinus />
                        </Link>
                    ) : (
                        <Link to={'/login'} className="login-btn">
                            Login
                            <FaUserPlus />
                        </Link>
                    )}
                </div>
            </Wrapper>
        </Center>
    );
}
