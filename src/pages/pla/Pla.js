import React, { Component } from 'react';
import ProductDirectory from '../../components/productDirectory/ProductDirectory';

const Pla = ({ products }) =>{
    return (
        <div>
            <h1>PLA</h1>
            <ProductDirectory products={products}/>
        </div>
    )
}

export default Pla;
