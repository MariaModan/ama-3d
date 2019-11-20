import React, { Component } from 'react';
import ProductCard from '../productCard/ProductCard';
import './productDirectory.scss';

class ProductDirectory extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div className='product-list'>
                {this.props.products.map(item => (
                    <ProductCard item={item} key={item.id}/>
                ))}
                </div>
            </div>
        )
            
            
    }
}

export default ProductDirectory;
