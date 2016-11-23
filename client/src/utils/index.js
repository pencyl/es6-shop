export function calculateTotal(items) {
    var total = 0;
    items.forEach(function(item) {
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
