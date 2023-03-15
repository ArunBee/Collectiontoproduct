import React, { useState } from "react";
import Close from "./Close";

//import { Row, Col } from "react-bootstrap";

function App(){
  const [data,setData]=useState(null);
  const[print,setPrint]=useState(false);
  function getData(val)
  {
    setData(val.target.value)
    setPrint(false)
  //  console.warn(val.target.value)
  }
  return(
    <div className="App">        
  <input type="text" onChange={getData} />
  <button onClick={()=>setPrint(true)}>Submit</button>
      {
        print?
        <ol>
            <li>{data}</li>
        </ol>        
        :null
      }
  </div>
  )
}
// const App = ()=>{

//   const[inputList, setInputList] = useState("");
//   // creating hooks
//   const[items, setitems] = useState([]);

//   const itemEvent =(event)=>{
//     setInputList(event.target.value);
//   };

//   const listOfItems =()=>{
//     setitems((olditem)=>{
//       return[...olditem, inputList];
//     });
//     setInputList("");
//   };

//   const deleteItems = (id)=>{
//     console.log('deleted')

//     setitems((olditem)=>{
//       return olditem.filter((arrElem, index)=>{
//           return index!== id;
//       });
//     });
//   };

//   return(
//     <>
//     <input type="text" value={inputList} onChange={itemEvent}/>
//     <button onClick={listOfItems}>Submit</button>

//     <ol>
//       {items.map((itemvals, index)=> {
//         return (       
//             <Close
//             key={index}
//             id={index}
//             text={itemvals}
//             onSelect={deleteItems}/>
//         )
//       })
//     }     
//     </ol>

//     </>


//   )
// }

export default App;