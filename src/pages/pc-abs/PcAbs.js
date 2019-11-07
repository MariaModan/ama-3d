import React, { Component } from 'react';
import ProductDirectory from '../../components/productDirectory/ProductDirectory';

const  PcAbs = ({ products }) => {
    return (
        <div>
            <h1>PC/ABS</h1>
            <ProductDirectory products={products}/>
        </div>
    )
}


export default PcAbs;
