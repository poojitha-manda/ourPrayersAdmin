import React, { Fragment } from 'react';
import blog5 from "../../assets/images/blog/blog-5.png";
import blog6 from "../../assets/images/blog/blog-6.png";
import { Link } from 'react-router-dom';
const ViewPopular = () => {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-xl-3 set-col-6">
                        <div className="card">
                            <div className="blog-box blog-grid text-center">
                                <img className="img-fluid top-radius-blog" src={blog5} alt="" />
                                <div className="blog-details-main">
                                    <hr />
                                    <h4 className="blog-bottom-details">Location 1</h4>
                                    <Link className="btn btn-primary btn-sm" to={`${process.env.PUBLIC_URL}/popular/editpopular`}>
                                                        <i className="fa fa-pencil"></i> Edit
                                                    </Link>
                                                    <button className="btn btn-danger btn-sm" href="javascript">
                                                        <i className="fa fa-trash"></i> Delete
                                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 set-col-6">
                        <div className="card">
                            <div className="blog-box blog-grid text-center">
                                <img className="img-fluid top-radius-blog" src={blog6} alt="" />
                                <div className="blog-details-main">
                                    <hr />
                                    <h4 className="blog-bottom-details">Location 1</h4>
                                    <Link className="btn btn-primary btn-sm" to={`${process.env.PUBLIC_URL}/popular/editpopular`}>
                                                        <i className="fa fa-pencil"></i> Edit
                                                    </Link>
                                                    <button className="btn btn-danger btn-sm" href="javascript">
                                                        <i className="fa fa-trash"></i> Delete
                                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 set-col-6">
                        <div className="card">
                            <div className="blog-box blog-grid text-center">
                                <img className="img-fluid top-radius-blog" src={blog5} alt="" />
                                <div className="blog-details-main">
                                    <hr />
                                    <h4 className="blog-bottom-details">Location 1</h4>
                                    <Link className="btn btn-primary btn-sm" to={`${process.env.PUBLIC_URL}/popular/editpopular`}>
                                                        <i className="fa fa-pencil"></i> Edit
                                                    </Link>
                                                    <button className="btn btn-danger btn-sm" href="javascript">
                                                        <i className="fa fa-trash"></i> Delete
                                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 set-col-6">
                        <div className="card">
                            <div className="blog-box blog-grid text-center">
                                <img className="img-fluid top-radius-blog" src={blog6} alt="" />
                                <div className="blog-details-main">
                                    <hr />
                                    <h4 className="blog-bottom-details">Location 1</h4>
                                    <Link className="btn btn-primary btn-sm" to={`${process.env.PUBLIC_URL}/popular/editpopular`}>
                                                        <i className="fa fa-pencil"></i> Edit
                                                    </Link>
                                                    <button className="btn btn-danger btn-sm" href="javascript">
                                                        <i className="fa fa-trash"></i> Delete
                                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ViewPopular;