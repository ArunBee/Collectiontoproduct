import React from "react";
import cart_product from "../cartproduct";
import product_card from "../product_card";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Cart (){

    const {productId, product_name, price} = useParams()
    const item ={productId, product_name, price}

//     const productId = useParams()
//   const thisProduct = product_Card.find(prod => {
//     if (prod.id == productId.productId) {
//       return prod
//     }
//   })

    console.log(item)

  return (
        <div className="CartPage">
            <Container>
            <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p className="mb-1">Shopping cart</p>
                    <p className="mb-0">You have 4 items in your cart</p>
                  </div>
                  <div>
                    <p>
                      <span className="text-muted">Sort by:</span>
                      <a href="#" className="text-body"> price </a>
                    </p>
                  </div>
                </div>

                <Row className="cart-heading">
                    <Col sm={3}>                        
                        <div className="image">
                            <h5>Product Image</h5>
                        </div>
                    </Col>                    
                    <Col sm={3}>
                        <div className="product-detail">
                            <h5>Product Details</h5>                            
                        </div>
                    </Col>
                    <Col sm={2}>
                        <h5>Quantity</h5>
                    </Col>
                    <Col sm={2}>
                        <h5>Price</h5>
                    </Col>
                    <Col sm={2}>
                        <h5>Delete</h5>
                    </Col>
                </Row>               
             
                <Row className="row-space">
                    <Col sm={3}>                        
                        <div className="image">
                            <img src="headphone.jpg"/>
                        </div>
                    </Col>
                    
                    <Col sm={3}>
                        <div className="product-detail">
                            <p className="Product-name">Head Phone</p>   
                            <p className="product-dec">Wireless headphone, Bluetooth</p>                         
                        </div>
                    </Col>
                    <Col sm={2}>
                        <p>3</p>
                    </Col>
                    <Col sm={2}>
                        <p>1500</p>
                    </Col>
                    <Col sm={2}>
                        <p>X</p>
                    </Col>
                </Row>

            </Container>
        </div>
  );   
}
export default Cart;