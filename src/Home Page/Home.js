import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import { Container, Modal } from "react-bootstrap";
import Contentcol from "../Contentcol";
import Homeimage from "../Homeimage";
import product_card from "../product_card";


const Home = () => {
    return (
      <div>       
        <AwesomeSlider>
          <div data-src="/banner.jpg" />                
          <div data-src="/banner.jpg" />    
        </AwesomeSlider>
        
        <Container>
          <Contentcol/>
          <hr/>
          <Homeimage/>     
                            
        </Container> 
      </div>      
    );
  };
    
  export default Home;