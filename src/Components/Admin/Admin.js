import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faBowlFood, faCoffee, faMotorcycle, faUserPen } from '@fortawesome/free-solid-svg-icons'
const Admin = () => {
    return (
<div className='vh-100 '>

<div className='d-flex flex-column bg-danger w-25 ' style={{marginTop:"60px"}}>

  <div className=' bg-danger p-2  text-white   ' >
<div className='p-2'>
<img className='w-25 h-25  border border-light rounded-circle ' src="https://w7.pngwing.com/pngs/358/473/png-transparent-computer-icons-user-profile-person-child-heroes-public-relations.png" alt="" />
</div>
    <br />
 <i className='fw-bold'>   Hello! Mr James ,What would you like to do today?</i>
<br />
<small>System Admin</small>

  </div>
  <div className='p-2' style={{backgroundColor:'grey'}}>

<div>
<Link  to='/addfood' href="" className='text-decoration-none'>
<div   className='d-flex mt-1 justify-content-between'>


  <p className='   text-white'>Add a Food Item</p>
  <FontAwesomeIcon style={{color:'white'}} icon={faBowlFood} />
  </div>
</Link>
</div>
<div>
<Link  to='/rider' href="" className='text-decoration-none'>
<div   className='d-flex mt-1 justify-content-between'>


  <p className='   text-white'>Add a Rider</p>
  <FontAwesomeIcon style={{color:'white'}} icon={faMotorcycle} />
  </div>
</Link>
</div>
<div>
<Link  to='/EditUser' href="" className='text-decoration-none'>
<div   className='d-flex mt-1 justify-content-between'>


  <p className='   text-white'>Edit User</p>
  <FontAwesomeIcon style={{color:'white'}} icon={faUserPen} />
  </div>
</Link>
</div>

</div>

</div>
</div>
    );
};

export default Admin;