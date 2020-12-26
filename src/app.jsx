import React from "react";
import Reactdom from "react-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Note from "./note.jsx";
import notes from "./notes.js";

// function createNote(notes)
// {
//     return (
//         <Note key={notes.key} title={notes.title}  content={notes.content}/>
//     );
// }

// notes.map(createNote)  this is also one of the method of working with map function where we are calling the create  function seperately
function App()
{
    return(
        <div>
            <Header />
              {notes.map(notes=><Note key={notes.key} title={notes.title}  content={notes.content}/>)}
            <Footer />
        </div>
    )
};

export default App;