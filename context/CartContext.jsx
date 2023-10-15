import { createContext, useContext, useEffect, useState } from 'react';
import {
    addProductToLocalStorage,
    getProductFromLocalStorage,
} from '../utils/localStorage';
import { customFetch } from '../utils/axios';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState(
        getProductFromLocalStorage()
    );
    const [products, setProducts] = useState([]);

    function addToCart(productId, amount) {
        if (amount) {
            for (let i = 0; i < amount; i++) {
                setCartProducts((prev) => [...prev, productId]);
            }
            return;
        }
        setCartProducts((prev) => [...prev, productId]);
    }

    function decreaseQuantity(productId) {
        setCartProducts((prev) => {
            const pos = prev.indexOf(productId);
            if (pos !== -1) {
                return prev.filter((value, index) => index !== pos);
            }
            return prev;
        });
    }

    function removeProductFromCart(productId) {
        setCartProducts((prev) => prev.filter((id) => id !== productId));
    }

    function clearCart() {
        setCartProducts([]);
    }

    let paymentSubtotal = 0;
    for (const productId of cartProducts) {
        const price = products.find((p) => p._id === productId)?.price || 0;
        paymentSubtotal += price;
    }

    useEffect(() => {
        addProductToLocalStorage(cartProducts);
        if (cartProducts.length > 0) {
            customFetch.post(`/carts`, { ids: cartProducts }).then((res) => {
                setProducts(res.data);
            });
        } else {
            setProducts([]);
        }
    }, [cartProducts]);

    return (
        <CartContext.Provider
            value={{
                cartProducts,
                addToCart,
                products,
                decreaseQuantity,
                removeProductFromCart,
                clearCart,
                paymentSubtotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCartContext() {
    return useContext(CartContext);
}
