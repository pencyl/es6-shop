export function calculateTotal(items = []) {
    let total = 0;
    items.forEach((item) => {
        total += item.price;
    });
    return total;
}

export function discountTotal(total = 0, discount = 0) {
    return Math.ceil(total * (1 - discount));
}

export function iterateItems({products = [], id = 0, inCart = false}) {
    return [...products].map((product) => {
        if (product.id === id) {
            product.isInCart = inCart;
        }
        return product;
    });
}
