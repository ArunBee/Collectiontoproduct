import React from "react";
// import { Breadcrumb } from "react-bootstrap/Breadcrumb";
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const Breadcrumbpage = () => {
    return(

     <Breadcrumb>
         <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
         <Breadcrumb.Item href="/about">About</Breadcrumb.Item>
         <Breadcrumb.Item href="/contact">Contact</Breadcrumb.Item>
         <Breadcrumb.Item active>data</Breadcrumb.Item>
     </Breadcrumb>
    )
}
export default Breadcrumbpage;