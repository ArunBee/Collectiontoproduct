import React from "react";
import Form from 'react-bootstrap/Form';
import { Button, Container } from "react-bootstrap";
import Breadcrumbpage from "../Breadcrumbpage";

export default class Contact extends React.Component{

  constructor(){
    super()
    this.state={
      user: null,
      password: null,
      topping: null
    }
  }

  submit(){
    console.warn(this.state)
  }

  render(){
    return(
      <div>       
         <h1>This is our contact us page.</h1>        
         <Container>
         <Breadcrumbpage/>
         
          {/* <input type="text" name="user" placeholder="Enter Your Name" onChange={(e)=>{this.setState({user:e.target.value})}} />
          <input type="password" name="password" placeholder="Enter Password" onChange={(e)=>{this.setState({password:e.target.value})}} />          
          <button onClick={()=>this.submit()}>Submit</button> */}

          <Form>            
            <Form.Group className="mb-3">               
               <Form.Control type="text" name="user" placeholder="Enter Your Name" onChange={(e)=>{this.setState({user:e.target.value})}}/>
             </Form.Group>
             <Form.Group className="mb-3">                
                 <Form.Control type="text" name="email" placeholder="Enter email" onChange={(e)=>{this.setState({user:e.target.value})}}/>
             </Form.Group>
            <Form.Group className="mb-3">
              {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check inline label="Checkbox" name="group1" type={type} id={`inline-${type}-1`} />
                  <Form.Check inline label="2" name="group1" type={type} id={`inline-${type}-2`} />
                  <Form.Check inline disabled  label="3 (Option not available)"  type={type}  id={`inline-${type}-3`} />
                </div>
              ))}
            </Form.Group>
            <button onClick={()=>this.submit()}>Submit</button>
          </Form>
        </Container>
       </div>
    )
  }
}

// const Contact = () => {
//     return (
//       <div>       
//         <h1>This is our contact us page.</h1>        
//         <Container>
//         <Breadcrumbpage/>
//           <Form>            
//             <Form.Group className="mb-3">
//               {/* <Form.Label>Enter Your Name</Form.Label> */}
//               <Form.Control type="text" placeholder="Enter Your Name"/>
//             </Form.Group>
//             <Form.Group className="mb-3">                
//                 <Form.Control type="email" placeholder="Enter email" />
//             </Form.Group>
//           </Form>
//         </Container>
//       </div>
//     );
//   };    
// export default Contact;