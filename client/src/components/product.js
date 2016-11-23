import React, { Component, PropTypes } from 'react';

class Product extends Component {

    constructor(props) {
        super(props);
    }

    add () {
        const {onAdd, id} = this.props;
        onAdd(id);
    }

    render () {
        const {name, description, price, isInCart} = this.props;
        return (
            <li className="product">
                <h3>{name}</h3>
                <p>{description}</p>
                <div className="image"></div>
                <p className="price">£{price}</p>
                <button
                    onClick={::this.add}
                    disabled={isInCart}>
                    Add to cart
                </button>
            </li>
        )
    }

};

Product.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    isInCart: PropTypes.bool,
    onAdd: PropTypes.func
};

export default Product;
