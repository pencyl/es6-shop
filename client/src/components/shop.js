var React = require('react');
var ProductList = require('./product-list');
var Cart = require('./cart');

function calculateTotal(items) {
    var total = 0;
    items.forEach(function(item) {
        total += item.price;
    });
    return total;
}

var Shop = React.createClass({

    getInitialState: function() {
        return {
            products: [],
            cart: [],
            total: 0
        };
    },

    componentDidMount: function() {
        var self = this;
        fetch('/api/products').then(function(response) {
            return response.json();
        })
        .then(function(products) {
            self.setState({ products: products });
        })
        .catch(console.error);
    },

    onAdd: function(id) {
        var item;
        this.state.products.forEach(function(product) {
            if (product.id === id) {
                item = product;
            };
        });

        var newCart = this.state.cart.slice();
        newCart.push(item);

        var newProducts = this.state.products.slice();
        newProducts.map(function(product) {
            if (product.id === id) {
                product.isInCart = true;
            }
            return product;
        });

        var total = calculateTotal(newCart);
        this.setState({
            cart: newCart,
            products: newProducts,
            total: total
        });
    },

    onRemove: function (id) {
        var itemIndex;
        this.state.cart.forEach(function(item, index) {
            if (item.id === id) {
                itemIndex = index;
            };
        });

        var newCart = this.state.cart.slice();
        newCart.splice(itemIndex, 1);

        var newProducts = this.state.products.slice();
        newProducts.map(function(product) {
            if (product.id === id) {
                product.isInCart = false;
            }
            return product;
        });

        var total = calculateTotal(newCart);
        this.setState({
            cart: newCart,
            products: newProducts,
            total: total
        });
    },

    render: function() {
        return (
            <div>
                <h1>Shop</h1>
                <ProductList products={this.state.products} onAdd={this.onAdd} />
                <Cart items={this.state.cart} total={this.state.total} onRemove={this.onRemove} />
            </div>
        )
    }

});

Shop.propTypes = {
    products : React.PropTypes.array
};

module.exports = Shop;
