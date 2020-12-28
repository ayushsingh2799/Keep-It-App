import React,{useState}from "react";
import Reactdom from "react-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Note from "./note.jsx";
import Textarea from "./textarea.jsx";



function App()
{

    const [notes,setNotes]=useState([]);
    function addNote(note)
    {
         setNotes(prevValue=>{
             return([...prevValue,note]);
         })
    }
    function removeNote(id)
    {
        setNotes(prevValue=>{
            return prevValue.filter((notes,index)=>{         //catch the filter functioning if you can.
                return (index!==id);
            });
        });
    }
    return(
        <div>
            <Header />
            <Textarea addingnote={addNote}/>
            { notes.map((item,index)=>{
              return<Note key={index} id={index} title={item.title} content={item.content} removingnote={removeNote}/>;
            })}
            <Footer />
        </div>
    )
};

export default App;