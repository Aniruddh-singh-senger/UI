import React from 'react';
import { Product } from './Product';
import ProductFile from './ProductFile';


const Helper = () => {
    return (
        <>
              <div className="card-s">
                {Product.map((scard) => {
                    return <ProductFile
                    product_name={scard.product_name}
                    brand_name={scard.brand_name}
                    discription={scard.discription}
                    price={scard.price}
                    date={scard.date}
                    image={scard.image}
                    state={scard.address.state}
                    city={scard.address.city}
                    />;
                })}
                </div>
           
        </>
    )
}

export default Helper
