import React, { Component } from 'react';
import './productCard.scss';

class ProductCard extends Component {
    render() {
        const {title, kg , color, price , image, alt} = this.props.item;
        return (
            <div className='product-card'>
                <img src={(`${image}`)} alt={(`${alt}`)}/>
                <p className='filament-description'>
                    {`Filament ${title} - ${color} ${kg}kg`}
                </p>
                <p className='price-tag'>{`${price} RON`}</p>
            </div>
        )
    }
}

export default ProductCard;
