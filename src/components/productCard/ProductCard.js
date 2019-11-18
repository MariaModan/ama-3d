import React, { Component } from 'react';
import './productCard.scss';

class ProductCard extends Component {
    render() {
        const {title, kg , color, price , image, alt} = this.props.item;
        console.log(image);
        return (
            <div className='product-card'>
                <img src={(`${image}`)} alt={(`${alt}`)}/>
                <div></div>
                <p>{title} - {kg}kg - {color} -{price} RON</p>
            </div>
        )
    }
}

export default ProductCard;
