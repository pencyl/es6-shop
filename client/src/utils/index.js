export function calculateTotal(items) {
    let total = 0;
    items.forEach((item) => {
        total += item.price;
    });
    return total;
}

export function iterateItems({products, id, inCart}) {
    return [...products].map((product) => {
        if (product.id === id) {
            product.isInCart = inCart;
        }
        return product;
    });
}
