import React from 'react';
import Dropdown from './Dropdown';
import ProductFile from './ProductFile';



const UI = () => {



    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gridGap: "20px", margin: '10px', padding: '10px' }}>
                <div style={{ background: 'black', height: '40%', borderRadius: '20px', padding: "20px" }}>
                    <input className="form-control me-2" type="search" placeholder="Filters" style={{ background: 'black', color: 'white' }} />
                    <Dropdown />
                </div>
                <div >
                    <h1>Edvora</h1>
                    <h5 style={{ color: 'grey', margin: '10px 0 ' }}>Products</h5>
                    <ProductFile />
                    <br />
                    <ProductFile />
                </div>
            </div>
        </>
    )
}

export default UI
