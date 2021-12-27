import React, { useEffect, useState } from "react";
import Card from "./Card";
import ToDoList from "./ToDoList";
import Form from "./Form";
import BrowseTagForm from "./BrowseTagForm";
import BrowseByTextForm from "./BrowseByTextForm";

function App({
  
  retrieveToDoListFromApp,
  listId,
  listsname,
  passonlyif,
  onChangingList,
  changeList,
  sendingTaskToChangeList,
 
}) {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  
  
  

  const [toDoList, setTodoList] = useState([]);
  const deletingATask = (e) => {
    
    let j = [...toDoList];
  
    for(let i=0;i<j.length;i++){
      console.log(j[i].id)
      if(j[i].id==e){
        console.log(j[i].id)
        j.splice(i,1)
      }


    }
     for(let i=0;i<j.length;i++){
       if(j[i].id!=i+1){
         j[i].id = i+1;
       }
     }
   setTodoList(j)
    
  };
 
 useEffect(()=>{
  if (passonlyif != -1) {
  
    let temp = [...toDoList];
let finalid ="";
    for(let i = 0;i<temp.length;i++){
       finalid = temp[i].id;
    }
    passonlyif.id = finalid+1;
    //change passonlyif id depending on the last id of the todolist
    temp.push(passonlyif);
    
    setTodoList(temp)
  }},[passonlyif])
  

  const passingTodoListToMom = (e) => {
   
    retrieveToDoListFromApp(e);
  };
  passingTodoListToMom(toDoList);

  const onSelectingText = (e) => {
    console.log(e);
  };
  //retrieve the enetered tag through a select option and gives back only those task that matches

  const onSelectingTag = (e) => {
    
  };

  //ON TASK UP (TASK GOES UP WHEN BUTTON IS PRESSED)
  //to implement: id should not change
  const onTaskUp = (e) => {
    const j = [...toDoList];
   
    for (let i = 0; i < j.length; i++) {
      //IF e matches with the id in that part of todolist..
      if (j[i].id == e && j[i] !== j[0]) {
        //we need to create a new array where
        //j[i] is above j[i-1] and all the other elements of the array will remain the same
        let temp = j[i - 1];
        j[i - 1] = j[i];
        j[i] = temp;
      }
      setTodoList(j);
    }
  };
  //ON TASK DOWN
  const onTaskDown = (e) => {
    const j = [...toDoList];
   
    for (let i = j.length - 1; i >= 0; i--) {
      //IF e matches with the id in that part of todolist..
      if (j[i].id == e && j[i] !== j[j.length - 1]) {
        const temp = j[i];
        j[i] = j[i + 1];
        j[i + 1] = temp;
      }
      setTodoList(j);
    }
  };
  const tagName = (e) => {
    //TO BE REFACTORED TO AN ARRAY OF TAGS
    const j = [...toDoList];
    j.forEach((element) => {
      if (element.id == Number(e.id)) {
        j[element.id - 1] = {
          id: e.id,
          task: element.task,
          complete: false,
          date: element.date,
          tag: element.tag + " " + "#" + e.tag,
        };
      }
    });

    setTodoList(j);
  };
  const sortByDateNow = () => {
    const j = [...toDoList];

    const timeDate = [];
    const newArr = [];
    for (let tt = 0; tt < j.length; tt++) {
      let time = j[tt].datenow;
      timeDate.push(time);
     
    }
    //oldTimeDate is timeDate before being sorted
    let oldTimeDate = [...timeDate];

    timeDate.sort(function (a, b) {
      return a - b;
    });

    const orderedArray = timeDate.map(function (old) {
      return oldTimeDate.indexOf(old);
    });

    for (let i = 0; i < j.length; i++) {
      let task = j[orderedArray[i]].task;
      let tag = j[orderedArray[i]].tag;
      let date = j[orderedArray[i]].date;
      let complete = j[orderedArray[i]].complete;
      let id = j[orderedArray[i]].id;

      let myObj = {
        id: id,
        task: task,
        tag: tag,
        complete: complete,
        datenow: timeDate[i],
        date: date,
      };

      newArr.push(myObj);
      const t = [...newArr].reverse();
      setTodoList(t);
    }
  };
  const sortByDate = () => {
    const j = [...toDoList];
    //to solve the bug I STILL N§EED TO fix the array of milliseconds (let time) and if two items are same we add a number
    const timeDate = [];
    const newArr = [];
    for (let tt = 0; tt < j.length; tt++) {
      let time = new Date(j[tt].date).getTime();

      //HERE TO FIX: if timedate contains the exact same number then make that number +1
      //else push that number to timeDate

      while (timeDate.includes(time)) {
      
        time++;
      }

      timeDate.push(time);
    }

    
    let oldTimeDate = [...timeDate];

    timeDate.sort(function (a, b) {
      return a - b;
    });
    const orderedArray = timeDate.map(function (old) {
      return oldTimeDate.indexOf(old);
    });
  
    for (let i = 0; i < j.length; i++) {
      let task = j[orderedArray[i]].task;
      let tag = j[orderedArray[i]].tag;
      let datenow = j[orderedArray[i]].datenow;
      let complete = j[orderedArray[i]].complete;
      let id = j[orderedArray[i]].id;

      let myObj = {
        id: id,
        task: task,
        tag: tag,
        complete: complete,
        date: new Date(timeDate[i]).toLocaleDateString("en-US", options),
        datenow: datenow,
      };

      newArr.push(myObj);
      const t = [...newArr].reverse();
      setTodoList(t);
    }
  };
  const handleModifier = (e) => {
    let jm = [...toDoList];
    jm.forEach((element) => {
      if (element.id == Number(e.id)) {
        for (let i = 0; i < jm.length; i++) {
          if (jm[i].id == element.id) {
            jm[i] = {
              id: e.id,
              task: e.task,
              complete: false,
              date: element.date,
              tag: element.tag,
              datenow: Date.now(),
            };
          }
        }
      }
    });
    setTodoList(jm);
  };
  const formToApp = (e) => {
    if (e.date == "") {
     
      let j = [
        ...toDoList,
        {
          id: toDoList.length + 1,
          task: e.input,
          complete: false,
          date: 0,
          tag: "",
          datenow: Date.now(),
        },
      ];
      setTodoList(j);
    } else {
      let j = [
        ...toDoList,
        {
          id: toDoList.length + 1,
          task: e.input,
          complete: false,
          date: new Date(e.date).toLocaleDateString("en-US", options),
          tag: "",
          datenow: Date.now(),
        },
      ];
      setTodoList(j);
    }
  };

  const handleDelete = () => {
    let mappings = toDoList.filter((taskcompleted) => !taskcompleted.complete);
    const reorderingIDs = mappings.forEach((o, i) => (o.id = i + 1));
    setTodoList(mappings);
  };
  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id == id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTodoList(mapped);
  };

  return (
    <Card className="App">
      {/* passing the initial data to ToDoList component}*/}
        <ToDoList
          key = {listId}
          sendingTaskToChangeList={sendingTaskToChangeList}
          confirmChangeList={onChangingList}
          onChangingList={onChangingList}
          listId={listId}
          listsname={listsname}
          className="todolist"
          sortByDate={sortByDate}
          sortBydatenow={sortByDateNow}
          tagging={tagName}
          todolist={toDoList}
          handleToggle={handleToggle}
          deletingCrossed={handleDelete}
          modifying={handleModifier}
          up={onTaskUp}
          down={onTaskDown}
          changeList={changeList}
          deletingATask={deletingATask}
        >
        </ToDoList>
        <Form className="form" formHandler={formToApp}></Form>
        <BrowseTagForm
          className="browsetagform"
          // browseFormHandler={bformToApp}
          selectTag={onSelectingTag}
          copyingList={toDoList}
        />
        <BrowseByTextForm
          className="browsebytextform"
          copiedlist={toDoList}
          selectText={onSelectingText}
        />
    </Card>
  );
}

export default App;
