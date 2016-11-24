var React = require('react');

var Coupon = React.createClass({

    getCoupon: function(e) {
        var self = this;
        var coupon = e.target.value;
        fetch('/api/coupon/' + coupon).then(function(response) {
            return response.json();
        })
        .then(function(discount) {
            self.props.onCoupon(discount.value);
        })
        .catch(console.error);
    },

    render: function() {
        return (
            <tr className="coupon">
                <td>Enter Coupon ({this.props.discount * 100}%)</td>
                <td colSpan="2"><input type="text" onBlur={this.getCoupon} placeholder={"e.g. SAVE50"} /></td>
            </tr>
        )
    }

});

Coupon.propTypes = {
    discount: React.PropTypes.number,
    onCoupon: React.PropTypes.func
};

module.exports = Coupon;
