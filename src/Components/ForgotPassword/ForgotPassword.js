import React from 'react';

const ForgotPassword = () => {
    return (
        <div  style={{marginTop:"100px"}}>
      <div className='d-flex flex-column justify-content-center align-items-center'>
      <h3 className='text-danger'>Enter the email you used to Register into the system</h3>
      <div className="input-group mb-3 w-25">
  <input  type="text" class="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>

</div>
<button class="btn btn-danger" type="submit">Submit</button>
      </div>
        </div>
    );
};

export default ForgotPassword;