import React from 'react';
import { Button } from 'react-bootstrap';

const Registration = () => {
    return (
        <div>

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

            
        </div>
    );
};

export default Registration;