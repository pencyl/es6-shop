var React = require('react');
var CartItem = require('./cart-item');
var Coupon = require('./coupon');

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
                    <tbody>
                        {items}
                        <Coupon
                            total={this.props.total}
                            discount={this.props.discount}
                            onCoupon={this.props.onCoupon}
                        />
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td colSpan="2">£{this.props.total}</td>
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
