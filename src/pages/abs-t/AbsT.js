import React from 'react';
import ProductDirectory from '../../components/productDirectory/ProductDirectory';

const AbsT = ( { products } ) => {
    return (
        <div>
            <h1>ABS-T</h1>
            <ProductDirectory products={products} />
        </div>
    )
}

export default AbsT;
