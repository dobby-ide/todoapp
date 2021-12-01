import React, { useState } from 'react';
import Card from './Card';
const ToDo = ({ todo, handleToggle, modifying, tagging }) => {
  const [editMode, setEditMode] = useState(false);
  const [singleTaskEdit, setSingleTaskEdit] = useState(false);
  const addATag = (e) => {
    //console.log(e.target.innerHTML);
    tagging(e.target.innerHTML);
    setSingleTaskEdit(true);
  };
  const editCompleted = (e) => {
    setEditMode(false);
  };
  const onModifying = (e) => {
    //console.log(e.target.id);
    const modifiedTask = {
      id: e.currentTarget.id,
      task: e.currentTarget.value,
    };
    modifying(modifiedTask);
  };

  const clickHandler = (event) => {
    event.preventDefault();
    handleToggle(event.currentTarget.id);
  };
  const modifyingItemHandler = (e) => {
    setEditMode(true);
    //find the div name="task" where id =e.target.id
    const temp = document.getElementsByName('task');
    //console.log(temp[e.target.id - 1].innerHTML);
    modifying(temp[e.target.id - 1].id);
    //then replace it with a text input where the content is the same:
    //1) create an input field
    //console.log(e.target.id);
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
                    className={todo.complete ? 'strike' : ''}
                    onClick={clickHandler}
                  >
                    {todo.task}
                  </div>{' '}
                  <button type="button" onClick={editCompleted}>
                    edit completed
                  </button>
                  {' in edit mode'}
                </div>
              </div>
            </div>
          </Card>
        ) : (
          <Card>
            <div className="tasks">
              <div className="todoid" onClick={addATag}>
                {todo.id}
              </div>
              <div className="task">
                <div
                  name="task"
                  id={todo.id}
                  className={todo.complete ? 'strike' : ''}
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
            </div>
          </Card>
        )}
      </div>
    </Card>
  );
};

export default ToDo;
