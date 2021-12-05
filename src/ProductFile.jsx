import React from 'react';

const ProductFile = () => {
    return (
        <>
            <div>
                <p>Product Name</p>
                <hr style={{ background: 'white', }} />
                <div style={{ background: 'black', padding: '20px', borderRadius: '20px', display: 'flex' }}>
                    <div className="col-md-6 col-lg-4 py-3">
                        <div className="card-blog" style={{ background: 'grey' }}>
                            <div >
                                <div className="avatar">
                                    <img src="../assets/img/person/person_1.jpg" alt="" />
                                </div>
                                <div className="entry-footer">
                                    <h5 >Product Name</h5>
                                    <h6>Brand Name</h6>
                                    <h6>$ 29.99</h6>
                                </div>
                            </div>
                            <div className="footer">
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}> <p >Location</p>
                                    <p >Date:10:12:2020</p></div>
                                Descrpition of the Product/item
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 py-3">
                        <div className="card-blog" style={{ background: 'grey' }}>
                            <div >
                                <div className="avatar">
                                    <img src="../assets/img/person/person_1.jpg" alt="" />
                                </div>
                                <div className="entry-footer">
                                    <h5 >Product Name</h5>
                                    <h6>Brand Name</h6>
                                    <h6>$ 29.99</h6>
                                </div>
                            </div>
                            <div className="footer">
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}> <p >Location</p>
                                    <p >Date:10:12:2020</p></div>
                                Descrpition of the Product/item
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 py-3">
                        <div className="card-blog" style={{ background: 'grey' }}>
                            <div >
                                <div className="avatar">
                                    <img src="../assets/img/person/person_1.jpg" alt="" />
                                </div>
                                <div className="entry-footer">
                                    <h5 >Product Name</h5>
                                    <h6>Brand Name</h6>
                                    <h6>$ 29.99</h6>
                                </div>
                            </div>
                            <div className="footer">
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}> <p >Location</p>
                                    <p >Date:10:12:2020</p></div>
                                Descrpition of the Product/item
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductFile
