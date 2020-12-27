import React,{useState} from "react";

function Textarea()
{
    return(<div class="text-area">
        <form>
            <input name="title" placeholder="Add Title..."></input>
            <textarea name="content" placeholder="Add Content....."></textarea>
        </form>
    </div>);
}
export default Textarea;