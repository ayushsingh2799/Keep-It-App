import React from "react";

let styleHeading ={
    fontFamily:"McLaren"
};  //this is a javascript object that has been created from css
function Header()
{
    return(
        <header>
               <h1 style={styleHeading}>Keep-It!</h1>
        </header>
    );
};

export default Header;