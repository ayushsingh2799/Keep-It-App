import React,{useState} from "react";
 function Note(props)
 {
     return (
         <div className="note" >
         <h1>Your Title</h1>
         <p>Your Note</p>
         <button>Delete</button>
         </div>
     ); 
 };

 export default Note;