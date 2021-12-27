import React from "react";
import Card from "./Card";
const Instructions = () =>{
return (
  <Card className = "INSTRUCTIONS">
      <div></div>
    <div>Instructions</div>
    <div>In this application it is possible to use one or more list that serves as Todo list.</div>
 <div>every item in the list can be added, signed as completed(simple click on a task) and then removed from the list(press delete crossed button)</div>
 
 <div>the list could be sorted by date (a date that is chosen to be the due date for the task) or by last modification/creation time (sort by last modification time button) </div> 
 <div>item can be pushed forward up the list or down the list with their relatives button (up or down)</div>
 <div>To add a tag click on the id number of the task and add a tag and confirm to exit the "add a tag" mode</div>
 
 <div>when one is in modify mode and more than one list is available, tasks can be moved from one list to another simply by selecting the list where the task should then go</div>
 <div>user can search items by words, or by tags from two different text input field in the application</div>
 
 </Card>

);

}
export default Instructions;