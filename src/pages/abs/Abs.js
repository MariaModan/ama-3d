import React from 'react';
import ProductDirectory from '../../components/productDirectory/ProductDirectory';

const Abs = ( { products} ) => {
    return (
        <div>
            <h1>ABS</h1>
            <ProductDirectory products={products}/>
        </div>
    )
}


export default Abs;
