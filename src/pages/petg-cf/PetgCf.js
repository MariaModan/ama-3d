import React, { Component } from 'react';
import ProductDirectory from '../../components/productDirectory/ProductDirectory';

const PetgCf  = ({ products }) => {
    return (
        <div>
            <h1>PETGCF</h1>
            <ProductDirectory products={products}/>
        </div>
    )
}


export default PetgCf;
