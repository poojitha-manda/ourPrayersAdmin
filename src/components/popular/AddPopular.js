import React, { Fragment } from 'react';

import {useForm} from 'react-hook-form'
const AddPopular = () => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook

  const onSubmit = data => {
    if (data !== '') {
      alert('You submitted the form and stuff!');
    } else {
      errors.showMessages();
    }
  };

  return (
    <Fragment>
     
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>ADD A NEW POPULAR HERE!</h5>
              </div>
              <div className="card-body">
                <form className="needs-validation" noValidate="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-row">
                  <div className="col-md-6 mb-3">
                      <label htmlFor="validationCustom01">Image</label>
                      <input className="form-control" name="Image" type="file" placeholder="Choose the Image" ref={register({ required: true })} />
                      <span>{errors.Image && 'Name is required'}</span>
                      <div className="valid-feedback">{"Looks good!"}</div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="validationCustom04">Location</label>
                      <input className="form-control" id="validationCustom04" name="Location" type="text" placeholder="Location" ref={register({ required: true })} />
                      <span>{errors.Location && 'Please provide a valid location.'}</span>
                      <div className="invalid-feedback">{"Please provide a valid location."}</div>
                    </div>
                  </div>
                  
                  <button className="btn btn-primary" type="submit">Add Popular</button>
                </form>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddPopular;