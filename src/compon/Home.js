import React from 'react';
import productdata from './productsdata';

const Home = () => {
    return (
        <>
        <div className="all_product_list_main">
            {productdata.map((curproduct) => {
                return (
                    <>
                        <a href={curproduct.productlink} target="_blank" style={{textDecoration:"none",color:"#000"}}>
                        <div className="singel_product_card">
                            <div className="singel_product_img">
                                <img src={curproduct.productimage} alt="" />
                            </div>
                            <div className="singel_product_d">
                                <h2>{curproduct.productname}</h2>
                            </div>
                        </div>
                        </a>
                    </>
                )
            })}
            </div>
        </>
    )
}

export default Home
