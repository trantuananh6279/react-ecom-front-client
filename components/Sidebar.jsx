import Logo from './Logo';
import { links } from '../utils/contant';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';
import { FaShoppingCart, FaUserPlus, FaUserMinus } from 'react-icons/fa';
import { useCartContext } from '../context/CartContext';
import {
    getUserFromLocalStorage,
    removeUserFromLocalStorage,
} from '../utils/localStorage';
import { useProductContext } from '../context/ProductContext';
import Wrapper from '../styles/Sidebar';

export default function Sidebar() {
    const { toggleSidebar, isOpenSidebar } = useProductContext();
    const { cartProducts } = useCartContext();
    const user = getUserFromLocalStorage();

    return (
        <Wrapper>
            <aside
                className={isOpenSidebar ? 'sidebar show-sidebar' : 'sidebar'}
            >
                <div className="nav-header">
                    <Logo />
                    <button onClick={toggleSidebar}>
                        <IoCloseSharp />
                    </button>
                </div>
                <nav>
                    <ul>
                        {links.map((link) => {
                            const { id, text, url } = link;
                            return (
                                <li key={id}>
                                    <Link to={url} onClick={toggleSidebar}>
                                        {text}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className="actions-wrap">
                    <Link
                        to={'/cart'}
                        className="cart-btn"
                        onClick={toggleSidebar}
                    >
                        Cart
                        <FaShoppingCart />
                        <span>{cartProducts.length}</span>
                    </Link>
                    {user ? (
                        <Link
                            to={'/login'}
                            onClick={() => {
                                removeUserFromLocalStorage();
                                toggleSidebar();
                            }}
                            className="login-btn"
                        >
                            Logout
                            <FaUserMinus />
                        </Link>
                    ) : (
                        <Link
                            to={'/login'}
                            className="login-btn"
                            onClick={toggleSidebar}
                        >
                            Login
                            <FaUserPlus />
                        </Link>
                    )}
                </div>
            </aside>
        </Wrapper>
    );
}
