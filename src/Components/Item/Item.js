import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Item = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{height: '18rem'}} variant="top" src={props.imgSrc} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Card.Subtitle style={{marginBottom: '1.5em'}}>RM {props.price}</Card.Subtitle>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Item;