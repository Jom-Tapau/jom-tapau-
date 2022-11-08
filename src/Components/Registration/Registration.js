import React from 'react';
import { Button } from 'react-bootstrap';

const Registration = () => {
    return (
        <div>
        
        <section className='w-75 mx-auto px-lg-5'>
          <h1
            style={{ fontSize: '80px' }}
            className='text-center mt-5 mb-2 fst-italic waviy'
          >
            <span style={{'--i':1}} className='animate shadow-red text-white'>J</span>
            <span style={{'--i':2}} className='animate shadow-white text-danger'>om</span>
            {/* <small></small> */}
            <span style={{'--i':3}} className='animate shadow-red text-white'>Ta</span>
            <span style={{'--i':4}} className='animate shadow-white text-danger'>pa</span>
            <span style={{'--i':5}} className='animate shadow-red text-white'>u</span>
          </h1>

        <div className='d-flex justify-content-center'>
            <div>
              <p className='text-center mt-5 fs-3'>
                Fill out the Form to login
              </p>
              <hr
                style={{
                  width: '400px',
                  color: 'green',
                  border: '2px solid green'
                }}
              />
            </div>
        </div>
        <form className='w-100 '>
            <div className='login-container'>
              <div className='did-floating-label-content'>
                <input
                  className='did-floating-input'
                  type='text'
                  placeholder=' '
                />
                <label className='did-floating-label'>Name</label>
              </div>
              <div className='did-floating-label-content'>
                <input
                  className='did-floating-input'
                  type='email'
                  placeholder=' '
                />
                <label className='did-floating-label'>Email</label>
              </div>
              <div className='did-floating-label-content'>
                <input
                  className='did-floating-input'
                  type='text'
                  placeholder=' '
                />
                <label className='did-floating-label'>Phone Number</label>
              </div>
              <div className='did-floating-label-content did-error-input'>
                <input
                  className='did-floating-input'
                  type='password'
                  placeholder=' '
                />
                <label className='did-floating-label'>Password</label>
              </div>
              <div className='did-floating-label-content did-error-input'>
                <input
                  className='did-floating-input'
                  type='password'
                  placeholder=' '
                />
                <label className='did-floating-label'>Confirm Password</label>
              </div>
            </div>
            <div className='d-flex  justify-content-center'>
              <Button className='mb-5' variant='danger' type='submit'>
                Sign up
              </Button>
            </div>
          </form>

         </section>   
        </div>
    );
};

export default Registration;