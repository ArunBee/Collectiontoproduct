import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Desting from "./Desting";



const Dashoard =()=>{
return(
    <Container>
        <Sidebar/>          
        <Desting/>
    </Container>
)
};
export default Dashoard;