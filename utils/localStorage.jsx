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

export function getUserFromLocalStorage() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

export function addUserToLocalStorage(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

export function removeUserFromLocalStorage() {
    localStorage.removeItem('user');
}
