import React from "react";

var date= new Date();
var year=date.getFullYear();

function Footer()
{
    return (
        <footer>
            <p>Created by- Ayush Singh {year}</p>
        </footer>
            
        
    );
};

export default Footer;