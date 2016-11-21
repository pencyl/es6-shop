var React = require('react');
var CartItem = require('./cart-item');

var Cart = React.createClass({

    render: function() {
        var onRemove = this.props.onRemove;
        var items = this.props.items.map(function(item, i) {
            return (
                <CartItem key={i}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    onRemove={onRemove}
                />);
        });

        return (
            <div className="cart">
                <h2>Cart</h2>
                <table>
                    <tbody>{items}</tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td>£{this.props.total}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }

});

Cart.propTypes = {
    items: React.PropTypes.array,
    total: React.PropTypes.number,
    onRemove: React.PropTypes.func
};

module.exports = Cart;
