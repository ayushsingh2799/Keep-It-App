import React from "react";
import AssignmentIcon from '@material-ui/icons/Assignment';


let styleHeading ={
    fontFamily:"McLaren"
};  //this is a javascript object that has been created from css
function Header()
{
    return(
        <header>
               <h1 style={styleHeading}><AssignmentIcon /> Keep-It!</h1>
        </header>
    );
};

export default Header;