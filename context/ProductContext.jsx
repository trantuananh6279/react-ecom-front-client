import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    console.log(isOpenSidebar);
    function toggleSidebar() {
        setIsOpenSidebar((prev) => !prev);
    }

    return (
        <ProductContext.Provider
            value={{ isOpenSidebar, setIsOpenSidebar, toggleSidebar }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export function useProductContext() {
    return useContext(ProductContext);
}
