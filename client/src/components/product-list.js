var React = require('react');
var ReactDOM = require('react-dom');
var Product = require('./product');

var ProductList = React.createClass({

    render: function() {
        var onAdd = this.props.onAdd;
        var products = this.props.products.map(function(product) {
            return (
                <Product
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                isInCart={product.isInCart}
                onAdd={onAdd}
                />
            )
        });

        return (
            <ul className="productList">
                {products}
            </ul>
        );
    }

});

ProductList.propTypes = {
    products : React.PropTypes.array,
    onAdd : React.PropTypes.func
};

module.exports = ProductList;
