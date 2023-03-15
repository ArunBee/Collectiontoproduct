import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import product_Card from "../product_card";
import { useParams } from "react-router-dom";

function Productdetail() {
  const productId = useParams()
  const thisProduct = product_Card.find(prod => {
    if (prod.id == productId.productId) {
      return prod
    }
  })
  console.log(">>>>>>>>>>>>", thisProduct, productId);
  return (
  <div className="prduct-page">
      <p>{thisProduct.description}</p>
    <Container>  
      <Row>
        <Col sm={5}> 
          <img src={thisProduct.thumb}/>          
        </Col>
        <Col sm={7}>
          <h2>{thisProduct.product_name}</h2>
          <h4>Product Reviews</h4>
          <div className="product-reviews">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>  
          <div className="product-price">
            <h3>{thisProduct.price}</h3>
          </div>
          <button onClick>Add To Cart</button>
          <div className="product-desc">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
          </div>
        </Col>
      </Row>
        {/* <Tabs  defaultActiveKey="home" transition={false} id="noanim-tab-example" className="mb-3">
        <Tab eventKey="home" title="Home">    
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </Tab>
        <Tab eventKey="profile" title="Profile">  
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>     
        </Tab>
        <Tab eventKey="contact" title="Contact">    
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>    
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>    
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>    
        </Tab>
      </Tabs> */}
    </Container>                                           
  </div>
 );
}
export default Productdetail;