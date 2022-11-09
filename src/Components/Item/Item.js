import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Item = (props) => {
    const {name, description, price, imgSrc} = props.food;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{height: '18rem'}} variant="top" src={imgSrc} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Subtitle style={{marginBottom: '1.5em'}}>RM {price}</Card.Subtitle>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Item;