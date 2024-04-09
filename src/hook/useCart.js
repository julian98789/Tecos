'use client'
const useCart = () => {
    // Comprobar si existe un carrito al cargar la página
    if (!sessionStorage.getItem('cart')) {
        // Si no hay carrito, inicializar uno vacío
        sessionStorage.setItem('cart', JSON.stringify([]));
    }

    const addToCart = (product) => {
        const cart = getCart();
        cart.push(product);
        sessionStorage.setItem('cart', JSON.stringify(cart));
    };

    const removeFromCart = (index) => {
        const cart = getCart();
        if (index >= 0 && index < cart.length) {
            cart.splice(index, 1);
            sessionStorage.setItem('cart', JSON.stringify(cart));
        }
    };

    const clearCart = () => {
        sessionStorage.removeItem('cart');
    };

    const getCart = () => {
        const cartData = sessionStorage.getItem('cart');
        return cartData ? JSON.parse(cartData) : [];
    };

    return { addToCart, removeFromCart, clearCart, getCart };
};

export default useCart;
