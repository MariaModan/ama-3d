import React from 'react';
import ProductDirectory from '../../components/productDirectory/ProductDirectory';

const Pajet  = ({ products }) =>  {
    return (
        <div>
            <h1>PAJET</h1>
            <ProductDirectory products={products}/>
        </div>
    )
}


export default Pajet;
