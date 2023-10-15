export function addProductToLocalStorage(product) {
    localStorage.setItem('cart', JSON.stringify(product));
}

export function getProductFromLocalStorage() {
    return localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : [];
}

export function removeProductFromLocalStorage() {
    localStorage.removeItem('cart');
}
