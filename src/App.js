import React, { useState, useRef, useEffect } from "react";

import Card from "./Card";
import ToDoList from "./ToDoList";
import Form from "./Form";
import BrowseTagForm from "./BrowseTagForm";
import Menu from "./Menu";
import Route from "./Route";
import Info from "./Info";
import BrowseByTextForm from "./BrowseByTextForm";

function App() {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  //const jsondata = data;
  const data = [
    {
      id: 1,
      task: "Watering the plants",
      complete: true,
      date: new Date(2021, 6, 1).toLocaleDateString("en-US", options),
      tag: ["#green"],
      datenow: 4,
    },
    {
      id: 2,
      task: "Buying fertilizer",
      complete: true,
      date: new Date(2021, 5, 1).toLocaleDateString("en-US", options),
      tag: ["#fingers"],
      datenow: 22,
    },
    {
      id: 3,
      task: "Add Iron to the soil",
      complete: false,
      date: new Date(2021, 4, 1).toLocaleDateString("en-US", options),
      tag: ["#green fingers"],
      datenow: 33,
    },
    {
      id: 4,
      task: "Cleaning the car",
      complete: false,
      date: new Date(2021, 3, 11).toLocaleDateString("en-US", options),
      tag: ["#chores"],
      datenow: 11,
    },
  ];

  const [toDoList, setTodoList] = useState(data);

  const onSelectingText = (e) => {
    console.log(e);
  };
  //retrieve the enetered tag through a select option and gives back only those task that matches

  const onSelectingTag = (e) => {
    console.log("in app from browsetagform(value of select");
    console.log(e);
  };

  //retrieve the user input to search for a particular tag
  //then compare it with the list of tasks and rerender a list.
  // const bformToApp = (e) => {
  //   console.log(e);

  //   //SHOW the list of tasks where the tag is equal to "e"
  //   const j = [...toDoList];
  //   console.log(j[1].tag);
  //   const mapped = [];
  //   for (let i = 0; i < j.length; i++) {
  //     if (j[i].tag.includes(e)) {
  //       mapped.push(j[i]);
  //     }
  //     console.log(mapped);
  //   }
  //   if (mapped.length == 0) {
  //     //do something that returns the user with "not a valid tag"
  //   } else {
  //     setTodoList(mapped);
  //   }
  // };

  //ON TASK UP (TASK GOES UP WHEN BUTTON IS PRESSED)
  //to implement: id should not change
  const onTaskUp = (e) => {
    const j = [...toDoList];
    console.log(j);
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
    console.log(j);
    for (let i = j.length-1; i >= 0; i--) {
      //IF e matches with the id in that part of todolist..
      if (j[i].id == e && j[i] !== j[j.length-1]) {
         const temp = j[i];
         j[i]= j[i+1];
         j[i+1]= temp;
      
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
      console.log("timeDate before sorting")
      console.log(timeDate)
    }
    //oldTimeDate is timeDate before being sorted
    let oldTimeDate = [...timeDate];

    timeDate.sort(function(a,b){
      return a-b;
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
      const t = [...newArr].reverse()
      setTodoList(t);
    }
  
  };
  const sortByDate = () => {
    const j = [...toDoList];

    const timeDate = [];
    const newArr = [];
    for (let tt = 0; tt < j.length; tt++) {
      let time = new Date(j[tt].date).getTime();
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
        for(let i=0;i<jm.length;i++){
          if(jm[i].id == element.id){
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
      console.log("not a date");
      let j = [
        ...toDoList,
        {
          id: toDoList.length + 1,
          task: e.input,
          complete: false,
          date: "",
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

      <Menu className="menu" />
      <Route path="/">
        <ToDoList
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
        ></ToDoList>
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
      </Route>
      <Route path="/info">
        <Info></Info>
      </Route>
    </Card>
  );
}

export default App;
