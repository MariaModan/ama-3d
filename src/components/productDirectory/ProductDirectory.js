import React, { Component } from 'react';
import ProductCard from '../productCard/ProductCard';

class ProductDirectory extends Component {
    render() {
        return (
            <div>
                {this.props.products.map(item => (
                    <ProductCard item={item} key={item.id}/>
                ))}
            </div>
        )
    }
}

export default ProductDirectory;
