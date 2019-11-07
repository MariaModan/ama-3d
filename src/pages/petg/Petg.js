import React, { Component } from 'react';
import ProductDirectory from '../../components/productDirectory/ProductDirectory';

const Petg  = ({ products }) => {
    return (
        <div>
            <h1>PTEG</h1>
            <ProductDirectory products={products}/>
        </div>
    )
}


export default Petg;
