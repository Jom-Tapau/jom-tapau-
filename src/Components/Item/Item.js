import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Item.css";

const Item = (props) => {
  const { name, description, price, imgURL } = props.food;

  return (
      <div>
          <Card style={{ width: '18rem', margin: '1.5rem'}}>
              <Card.Img style={{height: '18rem'}} variant="top" src={imgURL} />
   
              <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                      {description}
                  </Card.Text>
                  <Card.Subtitle style={{marginBottom: '1.5em'}}>RM {price}</Card.Subtitle>
                  <Button onClick={()=>props.handleAddtoCart(props.food)} className='button' variant="danger">Add to cart</Button>
              </Card.Body>
          </Card>

      </div>
  );

//   return (
//     <Card
//       style={{
//         height: "8rem",
//         padding: "3px",
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//       }}
//     >
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         {/* <Card.Text>
//               With supporting text below as a natural lead-in to additional content.
//             </Card.Text> */}
//         <Card.Subtitle style={{marginBottom: '1.5em'}}>RM {price}</Card.Subtitle>
//         <Button variant="danger">Add to Cart</Button>
//       </Card.Body>

//       <Card.Img
//         style={{ width: "6rem", height: "6rem", borderRadius: "3px" }}
//         variant="top"
//         src={imgSrc}
//       />
//     </Card>
//   );
};

export default Item;
