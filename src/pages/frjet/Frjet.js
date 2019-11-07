import React from 'react';
import ProductDirectory from '../../components/productDirectory/ProductDirectory';

const Frjet = ({ products }) => {
    return (
        <div>
            <h1>FRJET</h1>
            <ProductDirectory products={products}/>
        </div>
    )
}


export default Frjet;
