var React = require('react');

var Product = React.createClass({

    add: function() {
        this.props.onAdd(this.props.id);
    },

    render: function() {
        return (
            <li className="product">
                <h3>{this.props.name}</h3>
                <p>£{this.props.price}</p>
                <button onClick={this.add} disabled={this.props.isInCart}>Add to cart</button>
            </li>
        )
    }

});

Product.propTypes = {
    name : React.PropTypes.string,
    price : React.PropTypes.number,
    isInCart: React.PropTypes.bool,
    onAdd: React.PropTypes.func
};

module.exports = Product;
