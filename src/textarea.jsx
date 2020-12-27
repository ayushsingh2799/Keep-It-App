import React,{useState} from "react";

function Textarea(props)
{
    const[text,setText]=useState({title:"",content:""});

    function handleChange(event)
    {
        const name=event.target.name;
        const value=event.target.value;
        setText(prevValue=>{
            return({...prevValue,[name]:value});
        })
    }
    function handleClick(event)
    {
            props.addingnote(text);
            event.preventDefault();
    }

    return(<div class="text-area">
        <form>
            <input onChange={handleChange} name="title" value={text.title} placeholder="Add Title..."></input>
            <textarea onChange={handleChange} name="content"  value={text.content} placeholder="Add Content....."></textarea>
            <button onClick={handleClick}>+</button>
        </form>
    </div>);
}
export default Textarea;