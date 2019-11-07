import React from 'react';
import ProductDirectory from '../../components/productDirectory/ProductDirectory';

const Hips  = ({ products }) =>  {
    return (
        <div>
            <h1>HIPS</h1>
            <ProductDirectory products={products}/>
        </div>
    )
}


export default Hips;
