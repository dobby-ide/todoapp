import React, {useState} from "react";
import Card from "./Card";

const BrowseByTextForm = ({copiedlist,selectText}) =>{
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
  //retrieve the state and use it to make an array of tasks where the state is contained inside task.description
    const mapText = text

}

    return (
      <Card className = "browsebytextform">
        <div><form><div><label>search task by word(s)</label>
        <input type="text" onChange={onTextChange}></input></div>
        <div><input type ="submit" onClick = {onTextSubmit}></input></div>
        </form></div>
        <div>{searchedText.map((text)=>{
            return (<div key={text}>{text}</div>)
        })}</div>
      </Card>
    );

    
}
export default BrowseByTextForm;