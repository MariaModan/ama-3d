import React from 'react';
import ProductDirectory from '../../components/productDirectory/ProductDirectory';

const Pva  = ({ products }) => {
    return (
        <div>
            <h1>PVA</h1>
            <ProductDirectory products={products}/>
        </div>
    )
}


export default Pva;
