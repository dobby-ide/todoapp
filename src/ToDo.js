import React, { useState } from 'react';
import Card from './Card';
const ToDo = ({
  todolist,
  todo,
  handleToggle,
  modifying,
  tagging,
  up,
  down,
  listsname,
  sendingTaskToChangeList,
  deletingATask
}) => {
  const [editMode, setEditMode] = useState(false);
  const [singleTaskEdit, setSingleTaskEdit] = useState(false);
  const [tag, setTag] = useState("");

  //Pass id of the task and name of the list we need to move the task to

  const onChangeListName = (e) => {
    if (e.target.value != -1){
    console.log("here now!!!!!!!")
    console.log(e.target.value)
    const actualList=e.target.getAttribute("list")
    
    const listName = e.target.value;
    const id = e.target.id;
    if(actualList!=listName){
    const task = e.target.getAttribute("task");
    const date = e.target.getAttribute("date");
    const tag = e.target.getAttribute("tag");
    const obj = {
      id: id,
      task: task,
      date: date,
      tag: [tag],
      list: listName,
      datenow: Date.now(),
    };
    deletingATask(e.target.id)
    sendingTaskToChangeList(obj, listName);
  }}
  };

  //BUTTONS TO SHIFT UP AN ITEM ON THE LIST
  const onUp = (e) => {
    e.preventDefault();
    up(e.target.id);
  };
  //BUTTONS TO SHIFT DOWN AN ITEM ON THE LIST

  const onDown = (e) => {
    e.preventDefault();
    down(e.target.id);
  };

  const onChangingInput = (e) => {
    e.preventDefault();
    const data = { id: e.target.id, tag: e.target.value };
    setTag(data);
  };
  const onAddATag = (e) => {
    // here we create an object to be sent to App that contains
    //1) the id of the button
    //2 the data inside the textfield input(tag)
    e.preventDefault();
    tagging(tag);
    setTag("");
  };
  const exitModifyStatus = () => {
    setSingleTaskEdit(false);
  };

  const addATag = (e) => {
    //console.log(e.target.innerHTML);
    tagging(e.target.innerHTML);
    setSingleTaskEdit(true);
  };
  const editCompleted = (e) => {
    setEditMode(false);
  };
  const onModifying = (e) => {
    const modifiedTask = {
      id: e.target.id,
      task: e.target.value,
    };
    modifying(modifiedTask);
  };

  const clickHandler = (event) => {
    event.preventDefault();
    handleToggle(event.currentTarget.id);
  };
  const modifyingItemHandler = (e) => {
    e.preventDefault();
    setEditMode(true);

    const temp = document.getElementsByName("task");
  };
  return (
    <Card className="todo">
      <div>
        {editMode ? (
          <Card>
            <div className="tasks">
              <div className="todoid">
                <input id={todo.id} type="text" onChange={onModifying} />

                <div className="task">
                  <div
                    name="task"
                    id={todo.id}
                    className={todo.complete ? "strike" : ""}
                    onClick={clickHandler}
                  >
                    {todo.task}
                  </div>{" "}
                  <button type="button" onClick={editCompleted}>
                    edit completed
                  </button>
                  {" in edit mode"}
                </div>
              </div>
              <div>
                <select
                key={todo.id}
                  id={todo.id}
                  task={todo.task}
                  date={todo.date}
                  tag={todo.tag}
                  list={todo.list}
                  onChange={onChangeListName}
                >
                  <option key={todo.id} value={-1}>put task to another list</option>
                  {listsname.map((lists) => {
                    return (
                      <option key={lists} value={lists}>
                        {lists}
                      </option>
                    );
                  })}
                </select>
                
              </div>
            </div>
          </Card>
        ) : singleTaskEdit ? (
          <Card>
            {/* adding tag and features view */}
            <div>{todo.task}</div>
            <div>
              <input
                type="text"
                id={todo.id}
                onChange={onChangingInput}
              ></input>{" "}
              <button onClick={onAddATag} id={todo.id}>
                add TAG
              </button>
            </div>
            <div className="returnbutton">
              <button onClick={exitModifyStatus}>return to main view</button>
            </div>
          </Card>
        ) : (
          <Card>
            <div className="tasks">
              {/* modify single item */}
              <div className="todoid" onClick={addATag}>
                {todo.id}
              </div>
              <div className="task">
                <div
                  name="task"
                  id={todo.id}
                  className={todo.complete ? "strike" : ""}
                  onClick={clickHandler}
                >
                  {todo.task}
                </div>
              </div>
              <div className="tag">tag:{todo.tag}</div>
              <div className="modifyitembutton">
                <button id={todo.id} onClick={modifyingItemHandler}>
                  modify item
                </button>
              </div>
              <div className="tododate">
                <div className={todo.date}>{todo.date}</div>
              </div>
              <div className="up" id={todo.id}>
                <button id={todo.id} onClick={onUp}>
                  up
                </button>
              </div>
              <div className="down">
                <button id={todo.id} onClick={onDown}>
                  down
                </button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </Card>
  );
};

export default ToDo;
