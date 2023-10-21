import styled from 'styled-components';
import Logo from './Logo';
import { links } from '../utils/contant';
import { Link } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';
import { useProductContext } from '../context/ProductContext';
import { FaShoppingCart, FaUserPlus, FaUserMinus } from 'react-icons/fa';
import { useCartContext } from '../context/CartContext';
import {
    getUserFromLocalStorage,
    removeUserFromLocalStorage,
} from '../utils/localStorage';

const Wrapper = styled.div`
    .sidebar {
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        padding: 20px;
        background-color: #fff;
        text-transform: capitalize;
        font-size: 20px;
        transition: all 0.3s linear;
        transform: translate(-100%);
        z-index: -1;
    }
    .show-sidebar {
        transform: translate(0);
        z-index: 999;
    }
    li {
        padding: 16px 0;
        a {
            display: block;
            width: 100%;
        }
    }
    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        button {
            width: 32px;
            height: 32px;
            background-color: #fff;
            color: red;
            cursor: pointer;
            border: none;
            svg {
                width: 28px;
                height: 28px;
            }
        }
    }
    .actions-wrap {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 225px;
        margin: 1rem auto;
        text-align: center;
        font-size: 24px;
        a {
            padding: 10px;
        }
    }
    @media (min-width: 768px) {
        display: none;
    }
    .cart-btn {
        margin-right: 32px;
        position: relative;
        display: inline-flex;
        align-items: center;
        svg {
            margin-left: 8px;
        }
        span {
            position: absolute;
            top: -2px;
            right: -6px;
            width: 24px;
            height: 24px;
            background-color: var(--primary-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
        }
    }
    .login-btn {
        display: inline-flex;
        align-items: center;
        svg {
            margin-left: 8px;
        }
    }
`;

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
