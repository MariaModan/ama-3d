import React from 'react';
import ProductDirectory from '../../components/productDirectory/ProductDirectory';

const Marblejet  = ({ products }) =>  {
    return (
        <div>
            <h1>MARBLEJET</h1>
            <ProductDirectory products={products}/>
        </div>
    )
}


export default Marblejet;
