import React, { Fragment,useState,useEffect } from 'react';


import axios from 'axios'
import { Link } from 'react-router-dom';
const ViewUsers = () => {

    const [data,setData] = useState([])

    useEffect(() => {
        axios.get(`${process.env.PUBLIC_URL}/api/user-edit-table.json`).then(res => setData(res.data))
    },[])

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="edit-profile">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title mb-0">USER LISTING...</h4>
                                    <div className="card-options"><a className="card-options-collapse" href="javascript" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a><a className="card-options-remove" href="javascript" data-toggle="card-remove"><i className="fe fe-x"></i></a></div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table card-table table-vcenter text-nowrap">
                                        <thead>
                                            <tr>
                                                <td>User ID</td>
                                                <td>Name</td><td>Email</td><td>Phone Number</td><td>Location</td><td>Address</td><td>Religious Place</td>
                                                <td>Religion</td><td>Choose</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           <td>#User1</td>
                                           <td>User1 Name</td><td>User1 Email</td><td>9999999999</td><td>User1 Location</td>
                                           <td>User1 Address</td>
                                           <td>User1 Religion Place</td>
                                           <td>User1 Religion</td>
                                           <td className="text-right">
                                           <Link className="btn btn-primary btn-sm" to={`${process.env.PUBLIC_URL}/user/edituser`}>
                                                        <i className="fa fa-pencil"></i> Edit
                                                    </Link>
                                                    <button className="btn btn-danger btn-sm" href="javascript">
                                                        <i className="fa fa-trash"></i> Delete
                                                    </button>
                                                </td>
                                        </tbody>
                                        <tbody>
                                           <td>#User1</td>
                                           <td>User1 Name</td><td>User1 Email</td><td>9999999999</td><td>User1 Location</td>
                                           <td>User1 Address</td>
                                           <td>User1 Religion Place</td>
                                           <td>User1 Religion</td>
                                           <td className="text-right">
                                           <Link className="btn btn-primary btn-sm" to={`${process.env.PUBLIC_URL}/user/edituser`}>
                                                        <i className="fa fa-pencil"></i> Edit
                                                    </Link>
                                                    <button className="btn btn-danger btn-sm" href="javascript">
                                                        <i className="fa fa-trash"></i> Delete
                                                    </button>
                                                </td>
                                        </tbody>
                                        <tbody>
                                           <td>#User1</td>
                                           <td>User1 Name</td><td>User1 Email</td><td>9999999999</td><td>User1 Location</td>
                                           <td>User1 Address</td>
                                           <td>User1 Religion Place</td>
                                           <td>User1 Religion</td>
                                           <td className="text-right">
                                           <Link className="btn btn-primary btn-sm" to={`${process.env.PUBLIC_URL}/user/edituser`}>
                                                        <i className="fa fa-pencil"></i> Edit
                                                    </Link>
                                                    <button className="btn btn-danger btn-sm" href="javascript">
                                                        <i className="fa fa-trash"></i> Delete
                                                    </button>
                                                </td>
                                        </tbody>
                                        <tbody>
                                           <td>#User1</td>
                                           <td>User1 Name</td><td>User1 Email</td><td>9999999999</td><td>User1 Location</td>
                                           <td>User1 Address</td>
                                           <td>User1 Religion Place</td>
                                           <td>User1 Religion</td>
                                           <td className="text-right">
                                                    <Link className="btn btn-primary btn-sm" to={`${process.env.PUBLIC_URL}/user/edituser`}>
                                                        <i className="fa fa-pencil"></i> Edit
                                                    </Link>
                                                    <button className="btn btn-danger btn-sm" href="javascript">
                                                        <i className="fa fa-trash"></i> Delete
                                                    </button>
                                                </td>
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ViewUsers;