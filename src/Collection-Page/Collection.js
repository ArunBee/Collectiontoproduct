import React from "react";
import product_Card from "../product_card";
import {Link} from "react-router-dom";

const Collection =()=>{
    console.log(product_Card);
    const listitems = product_Card.map((item)=>    
    <div className="card" key={item.id}>
        <div className="card-img">
            <img src={item.thumb}/>
        </div>
        <div className="card-header">
            <Link to={`/productdetail/${item.id}`}><h2>{item.product_name}</h2></Link>
            <p>{item.description}</p>
            <p className="price">{item.currency}<span>{item.price}</span></p>
        </div>
    </div>
    )
    return(
        <div className="Maincontent">
            <div className="container">
                <h3>headphone</h3>
                {listitems}
            </div>
        </div>
    )
};
export default Collection;
