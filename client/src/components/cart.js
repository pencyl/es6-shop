import React, { Component, PropTypes } from 'react';
import CartItem from './cart-item';
import Coupon from './coupon';

class Cart extends Component {

    render () {
        const { items, total, onRemove, onCoupon, discount } = this.props;
        const List = items.map((item, i) => {
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
                        {List}
                        <Coupon
                            discount={discount}
                            onCoupon={onCoupon}
                        />
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td colSpan="2">£{total}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }

};

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    discount: PropTypes.number,
    onRemove: PropTypes.func,
    onCoupon: PropTypes.func
};

export default Cart;
