import React from 'react';
import productdata from './productsdata';

const Product = () => {
    return (
        <>
            <img src={productdata[0].productimage} alt="" />
        </>
    )
}

export default Product
