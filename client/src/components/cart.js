import React, { Component, PropTypes } from 'react';
import CartItem from './cart-item';

class Cart extends Component {

    render () {
        const { items, total, onRemove } = this.props;
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
    onRemove: PropTypes.func
};

export default Cart;
