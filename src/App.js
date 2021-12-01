import React, { useState } from 'react';

import Card from './Card';
import ToDoList from './ToDoList';
import Form from './Form';

function App() {
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  //const jsondata = data;
  const data = [
    {
      id: 1,
      task: 'Watering the plants',
      complete: true,
      date: new Date(2021, 6, 1).toLocaleDateString('en-US', options),
      tag: 'green fingers',
    },
    {
      id: 2,
      task: 'Buying fertilizer',
      complete: true,
      date: new Date(2021, 5, 1).toLocaleDateString('en-US', options),
      tag: 'green fingers',
    },
    {
      id: 3,
      task: 'Add Iron to the soil',
      complete: false,
      date: new Date(2021, 4, 1).toLocaleDateString('en-US', options),
      tag: 'green fingers',
    },
    {
      id: 4,
      task: 'Cleaning the car',
      complete: false,
      date: new Date(2021, 3, 11).toLocaleDateString('en-US', options),
      tag: 'chores',
    },
  ];

  const [toDoList, setTodoList] = useState(data);
  const tagName = (e) => {
    console.log(e);
  };
  const sortByDate = () => {
    const j = [...toDoList];
    console.log(j);
    function customSort(a, b) {
      console.log('DATE IS ' + new Date(b.date));
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    const t = j.sort(customSort);
    console.log(t);
    setTodoList(t);
  };
  const handleModifier = (e) => {
    console.log(e.task);

    // console.log(toDoList[Number(e) - 1]); //gives the
    // console.log('inside app');
    // console.log(e.id);
    let jm = [...toDoList];
    jm.forEach((element) => {
      if (element.id == Number(e.id)) {
        // console.log(element, index);
        jm[element.id - 1] = {
          id: e.id,
          task: e.task,
          complete: false,
          date: element.date,
        };
      }
    });
    console.log(jm);
    setTodoList(jm);
  };
  const formToApp = (e) => {
    console.log(e);
    console.log(e.date);
    if (e.date == '') {
      console.log('not a date');
      let j = [
        ...toDoList,
        {
          id: toDoList.length + 1,
          task: e.input,
          complete: false,
          date: '',
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
          date: new Date(e.date).toLocaleDateString('en-US', options),
        },
      ];
      setTodoList(j);
    }
  };

  const handleDelete = () => {
    let mappings = toDoList.filter((taskcompleted) => !taskcompleted.complete);
    console.log('mappings');
    console.log(mappings);
    const reorderingIDs = mappings.forEach((o, i) => (o.id = i + 1));

    console.log(reorderingIDs);
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
        className="todolist"
        sortByDate={sortByDate}
        tagging={tagName}
        todolist={toDoList}
        handleToggle={handleToggle}
        deletingCrossed={handleDelete}
        modifying={handleModifier}
      ></ToDoList>
      <Form className="form" formHandler={formToApp}></Form>
    </Card>
  );
}

export default App;
