import React from "react";

    const Close = (props)=>{

        return(
            <>
            <button onClick={()=>{
                props.onSelect(props.id);
            }}>X</button>            
            <li>{props.text}</li>
            </>
        ) 
    }

export default Close;
