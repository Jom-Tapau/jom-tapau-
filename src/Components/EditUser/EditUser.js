import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EditUser = () => {
    return (
        <div className='mt-5    d-flex justify-content-center align-content-center'>
           <Card style={{ width: '180px',marginRight:"10px"  }}>
      <Card.Img  style={{width:"200px", height:"200px"}} variant="top" src="https://img.freepik.com/premium-vector/delivery-man-ride-motorcycle-cartoon_261104-102.jpg?w=2000" />
      <Card.Body>
        
      
        <Button as={Link} to="/editRider" variant="danger">Edit Rider</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '180px',  }}>
      <Card.Img  style={{width:"180px", height:"200px"}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW8ZHuCcfOR-gSdmHyzLuvBJec23736zlaPelbDf7VOsyWWaxPKTkjOx8_9glaebwn-EE&usqp=CAU" />
      <Card.Body>
        
      
        <Button as={Link} to="/editCustomer" variant="danger">Edit Customer</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default EditUser;