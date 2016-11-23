import React, { Component, PropTypes } from 'react';
import ProductList from './product-list';
import Cart from './cart';
import { calculateTotal, iterateItems, discountTotal } from '../utils';

class Shop extends Component {

    constructor (props) {
        super(props);
        this.state = {
            products: [],
            cart: [],
            discount: 0,
            total: 0
        }
    }

    componentDidMount() {
        fetch('/api/products')
            .then((response) => response.json())
            .then(products => this.setState({ products }))
            .catch(console.error);
    }

    onAdd (id = 0) {
        const {products, cart} = this.state;
        const item = products.find(product => product.id === id);
        const newCart = [...cart, item];
        const total = calculateTotal(newCart);
        const newProducts = iterateItems({
            products,
            id,
            inCart: true
        });
        this.setState({
            cart: newCart,
            products: newProducts,
            total
        });
    }

    onRemove (id = 0) {
        const {products, cart} = this.state;
        const itemIndex = cart.findIndex(item => item.id === id);
        const newCart = [
            ...cart.slice(0, itemIndex),
            ...cart.slice(itemIndex + 1)
        ];
        const total = calculateTotal(newCart);
        const newProducts = iterateItems({
            products,
            id,
            inCart : false
        });
        this.setState({
            cart: newCart,
            products: newProducts,
            total
        });
    }

    onCoupon(discount = 0) {
        this.setState({
            discount
        });
    }

    render() {
        const {products, cart, total, discount} = this.state;
        const discountedTotal = discountTotal(total, discount);
        return (
            <div className="wrapper">
                <header>
                    <h1>Shop</h1>
                </header>
                <ProductList
                    products={products}
                    onAdd={::this.onAdd}
                />
                <Cart
                    items={cart}
                    total={discountedTotal}
                    discount={discount}
                    onCoupon={::this.onCoupon}
                    onRemove={::this.onRemove}
                />
            </div>
        )
    }

}

Shop.propTypes = {
    products: PropTypes.array
};

export default Shop;
