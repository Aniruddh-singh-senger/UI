import React, {useState} from 'react';

const Dropdown = () => {

    const [product, setProduct] = useState("")

    return (
        <>
            <select className="form-select" value={product} onChange={e => setProduct(e.target.value)} style={{marginTop:'20px' }}>
                        <option selected>Product Data</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <select className="form-select" value={product} onChange={e => setProduct(e.target.value)} style={{  marginTop:'20px' }}>
                        <option selected>State</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select className="form-select" value={product} onChange={e => setProduct(e.target.value)} style={{  marginTop:'20px' }}>
                        <option selected>City</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
        </>
    )
}

export default Dropdown
