import React, { useState } from "react";
import App from "./App";

import Card from "./Card";
import Menu from "./Menu";
import Route from "./Route";
import Info from "./Info";
import Instructions from "./Instructions";



const Mom = () => {
   
  //this state will render the actual number of list
  const [newToDoList, setNewToDoList] = useState(["original"]);
  

  //editing mode to give a name to my list
  const [listName, setListName] = useState(false);
  const [newList, setNewList] = useState("");
  const[listNameFromToDo,setListNameFromToDo]= useState("")
  //this is the place where the updateTodoLists are shown: todolist is the different todolists coming from all the rendered App components
  const[taskToAdd,setTaskToAdd]=useState({})
  const[choiceofview,setChoiceofview] = useState("");
  const viewChoice=(e)=>{
 
    setChoiceofview(e);
//set the e equal to a state and use that state
// to give a conditional rendering
  }


const childFunc = React.useRef(null);
  const retrieveTaskToChangeList = (e,r)=>{
  
  setListNameFromToDo(r)
  setTaskToAdd(e)
  
}

  const toDoList=(e)=>{
  
 
  return e;
}


  const deleteThisList = (e) => {
    
    //setNewToDoList without e
    const j = [...newToDoList];
    for (let i = 0; i < j.length; i++) {
      if (j[i].includes(e)) {
        const index = j.indexOf(e);
        j.splice(index, 1);
      }
    }
    setNewToDoList(j);
  };
  const onNameList = (e) => {
    e.preventDefault();
   
    setNewList(e.target.value);
  };

  const createNewList = () => {
    //finish the editing mode to create a new list
    setListName(false);
    const j = [...newToDoList];
    j.push(newList);
    setNewToDoList(j);
  };

  const editingModeForNewListCreation = () => {
    setListName(true);
  };
    
     return (
       <Card className="momcontainer">
         <div>
           <Route path="/">
             <div>
               <Menu listsnames={newToDoList} viewChoice={viewChoice}></Menu>
               {choiceofview === "HOME" && (
                 <div>
                   {newToDoList.map((list) => {
                     return (
                       <div key={list}>
                         <div>To-Do list: {list}</div>
                         <div>
                           <button onClick={() => deleteThisList(list)}>
                             Delete this List
                           </button>
                         </div>
                         <App
                           key={list}
                           childFunc={childFunc}
                           listsname={newToDoList}
                           sendingTaskToChangeList={retrieveTaskToChangeList}
                           retrieveToDoListFromApp={toDoList}
                           listId={list}
                           passonlyif={
                             listNameFromToDo == list ? taskToAdd : -1
                           }
                         ></App>
                       </div>
                     );
                   })}
                 </div>
               )}
               <button onClick={editingModeForNewListCreation}>
                 create a new list
               </button>

               {listName ? (
                 <div>
                   <label>enter the list name</label>
                   <input type="text" onChange={onNameList}></input>
                   <button onClick={createNewList}>confirm</button>
                 </div>
               ) : (
                 <div></div>
               )}
               {choiceofview === "INSTRUCTIONS" && (
                 <Instructions key={choiceofview}></Instructions>
               )}
               {choiceofview === "INFO" && <Info key={choiceofview}></Info>}
             </div>
           </Route>
         </div>
       </Card>
     );
 
};
export default Mom;
