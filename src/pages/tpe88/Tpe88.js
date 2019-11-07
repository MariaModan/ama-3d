import React, { Component } from 'react';
import ProductDirectory from '../../components/productDirectory/ProductDirectory';

const Tpe88  = ({ products }) =>  {
    return (
        <div>
            <h1>TPE88</h1>
            <ProductDirectory products={products}/>
        </div>
    )
}


export default Tpe88;
