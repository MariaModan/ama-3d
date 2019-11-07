import React, { Component } from 'react';
import ProductCard from '../productCard/ProductCard';

class ProductDirectory extends Component {
    render() {
        return (
            <div>
                {this.props.products.map(item => (
                    <p key={item.id}>{item.title} - {item.kg}kg - {item.color} -{item.price} RON</p>
                ))}
            </div>
        )
    }
}

export default ProductDirectory;
