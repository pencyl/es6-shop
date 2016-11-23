import React, { Component, PropTypes } from 'react';
import Product from './product';

class ProductList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { onAdd, products } = this.props;
        const List = products.map((product) => {
            return (
                <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    isInCart={product.isInCart}
                    onAdd={onAdd}
                />
            )
        });

        return (
            <div className="products">
                <h2>Products</h2>
                <ul>
                    {List}
                </ul>
            </div>
        );
    }

};

ProductList.propTypes = {
    products: PropTypes.array,
    onAdd: PropTypes.func
};

export default ProductList;
