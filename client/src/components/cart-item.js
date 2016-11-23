import React , { Component, PropTypes } from 'react';

class CartItem extends Component {

    remove() {
        const {onRemove, id} = this.props;
        onRemove(id);
    }

    render() {
        const { name, price} = this.props;
        return (
            <tr className="cart-item">
                <td>{name}</td>
                <td>£{price}</td>
                <td>
                    <button                                     onClick={::this.remove}>
                    Remove
                    </button>
                </td>
            </tr>
        )
    }

};

CartItem.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    onRemove: PropTypes.func
};

export default CartItem;
