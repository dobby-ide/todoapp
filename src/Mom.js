import React, { useState } from "react";
import App from "./App";

import Card from "./Card";
import Menu from "./Menu";
import Route from "./Route";
import Info from "./Info";
import Instructions from "./Instructions";

//MAIN Component before index.js

const Mom = () => {
  //this state will render the actual number of list
  const [newToDoList, setNewToDoList] = useState(['original']);

  //editing mode to give a name to my list
  const [listName, setListName] = useState(false);
  const [newList, setNewList] = useState('');
  const [listNameFromToDo, setListNameFromToDo] = useState('');
  //this is the place where the updateTodoLists are shown: todolist is the different todolists coming from all the rendered App components
  const [taskToAdd, setTaskToAdd] = useState({});
  const [choiceofview, setChoiceofview] = useState('');
  const viewChoice = (e) => {
    setChoiceofview(e);
    //set the e equal to a state and use that state
    // to give a conditional rendering
  };

  const childFunc = React.useRef(null);
  const retrieveTaskToChangeList = (e, r) => {
    setListNameFromToDo(r);
    setTaskToAdd(e);
  };

  const toDoList = (e) => {
    return e;
  };

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
    if (newList === '') {
      console.log('silly me');
    } else {
      j.push(newList);
      setNewToDoList(j);
    }
  };

  const editingModeForNewListCreation = () => {
    setListName(true);
  };

  return (
    <Card className="momcontainer">
      <div className="momcontainer__menu">
        <Menu listsnames={newToDoList} viewChoice={viewChoice}></Menu>
      </div>

      {choiceofview === 'HOME' && (
        <div className="todolist__container">
          {newToDoList.map((list) => {
            return (
              <div key={list} className="todolist__container-main">
                <h3 className="u-center-header">To-Do list: {list}</h3>

                <App
                  key={list}
                  childFunc={childFunc}
                  listsname={newToDoList}
                  sendingTaskToChangeList={retrieveTaskToChangeList}
                  retrieveToDoListFromApp={toDoList}
                  listId={list}
                  passonlyif={listNameFromToDo === list ? taskToAdd : -1}
                ></App>

                <div
                  className="todolist__container-delete-btn"
                  onClick={() => deleteThisList(list)}
                >
                  Delete the List
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div
        onClick={editingModeForNewListCreation}
        className="momcontainer__newlist-btn"
      >
        new list
      </div>
      {listName ? (
        <div className="momcontainer__newlist-group">
          <input
            id="new list"
            placeholder="enter the list name"
            className="momcontainer__newlist-input"
            type="text"
            onChange={onNameList}
          ></input>
          <label htmlFor="new list" className="momcontainer__newlist-label">
            enter the list name
          </label>
          {newList.length > 2 && (
            <div
              className="momcontainer__newlist-btn--create"
              onClick={createNewList}
            >
              confirm
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
      {choiceofview === 'INSTRUCTIONS' && <Instructions></Instructions>}
      {choiceofview === 'INFO' && <Info></Info>}
    </Card>
  );
};
export default Mom;
