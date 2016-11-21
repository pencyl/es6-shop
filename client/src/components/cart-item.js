var React = require('react');

var CartItem = React.createClass({

    remove: function() {
        this.props.onRemove(this.props.id);
    },

    render: function() {
        return (
            <tr className="cart-item">
                <td>{this.props.name}</td>
                <td>£{this.props.price}</td>
                <td><button onClick={this.remove}>Remove</button></td>
            </tr>
        )
    }

});

CartItem.propTypes = {
    name : React.PropTypes.string,
    price : React.PropTypes.number,
    onRemove: React.PropTypes.func
};

module.exports = CartItem;
