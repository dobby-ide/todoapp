import React, {useState} from "react";
import Card from "./Card";

const BrowseByTextForm = ({copiedlist}) =>{
    const[text, setText]=useState("");
    
const onTextChange = (e) =>{
    e.preventDefault();
    setText(e.target.value);
    onTextSubmit();
    
}
const copy= [...copiedlist];
const searchedText = [];

for(let i=0;i<copy.length;i++){
let newstr = copy[i].task;
if (newstr.toLowerCase().includes(text) && text != ""){
    //here I could modify in order to map more data
    // about the task that needs to show on render
    // when a search by word is performed, for example the id, the date etc.
    searchedText.push(copy[i].task)
}
}

const onTextSubmit=()=>{
}

    return (
      <Card className="browsebytextform">
        <form className="browsebytextform-main">
          <div className="browsebytextform-main--group">
            <input
              placeholder="browse by word"
              id="browsebytext"
              className="browsebytextform-main--input"
              type="text"
              onChange={onTextChange}
            ></input>
            <label for="browsebytext" className="browsebytextform-main--label">
              browse by word
            </label>
          </div>
        </form>

        <div>
          {searchedText.map((text) => {
            return <div key={text}>{text}</div>;
          })}
        </div>
      </Card>
    );

    
}
export default BrowseByTextForm;