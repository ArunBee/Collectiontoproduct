import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Homeimage() {
    return ( 
    <Row>
        <Col sm={4}>
        <h3>What is Lorem Ipsum?</h3>
          <div className="home-image">
            <img src="flower.jpg"/>
            <p>test </p>
          </div>
        </Col>
        <Col sm={4}>
        <h3>What is Lorem Ipsum?</h3>
        <div className="home-image">
          <img src="home.jpg"/>
          <p>test </p>
          </div>
        </Col>
        <Col sm={4}>
        <h3>What is Lorem Ipsum?</h3>
        <div className="home-image">
          <img src="faq.jpg"/>
          <p>test </p>
          </div>
        </Col>
    </Row>
    )
}