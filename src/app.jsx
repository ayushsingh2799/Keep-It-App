import React from "react";
import Reactdom from "react-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Note from "./note.jsx";
import Textarea from "./textarea.jsx";


function App()
{
    return(
        <div>
            <Header />
            <Textarea />
            <Note />
            <Footer />
        </div>
    )
};

export default App;