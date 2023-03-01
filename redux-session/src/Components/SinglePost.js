
import { useEffect, useState } from "react";
import { getTotalCount, testWithoutImport } from "../Common/Reusable";
 
 

export default function SinglePost(props) {
    
    const [total, setTotal] = useState(0);
    const likeClickHandler = () => {
    
    testWithoutImport ()    
    };
     
    const calculateTotalHandler =() => {
    setTotal(getTotalCount());
    console.log("total",getTotalCount ());
        
    }
         
    
    return (

     <div>
   
     <div className={"user_info"}>{props.item.name}</div>
     <div className={"Images"}></div>
     <div className={"Comments"}></div>
     
     <button onClick={likeClickHandler}>Like</button>
     <button onClick={calculateTotalHandler}>Calculate total {total}</button>


     </div>


    );
}