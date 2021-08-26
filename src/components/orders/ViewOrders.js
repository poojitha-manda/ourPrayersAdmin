import React, { Fragment } from 'react';
import DataTable from 'react-data-table-component';
import { productData,productColumns } from '../../data/product-list';

const ViewProducts = () => {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    {/* <!-- Individual column searching (text inputs) Starts--> */}
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Orders Listing...</h5>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive product-table">
                                    <DataTable
                                        noHeader
                                        columns={productColumns}
                                        data={productData}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Individual column searching (text inputs) Ends--> */}
                </div>
            </div>
        </Fragment>
    );
};

export default ViewProducts;