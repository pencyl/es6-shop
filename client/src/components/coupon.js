import React, { Component, PropTypes } from 'react';

class Coupon extends Component {

    constructor(props) {
        super(props);
    }

    getCoupon (e) {
        const coupon = e.target.value || 0;
        fetch(`/api/coupon/${coupon}`)
            .then(response => response.json())
            .then(discount => this.props.onCoupon(discount.value))
            .catch(console.error);
    }

    render () {
        return (
            <tr className="coupon">
                <td>Enter Coupon ({this.props.discount * 100}%)</td>
                <td colSpan="2">
                    <input type="text" onBlur={::this.getCoupon} placeholder={"e.g. SAVE50"} />
                </td>
            </tr>
        )
    }

};

Coupon.propTypes = {
    discount: PropTypes.number,
    onCoupon: PropTypes.func,
    getCoupon: PropTypes.func
};

export default Coupon;
