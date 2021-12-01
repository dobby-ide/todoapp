import React from 'react';
import ToDo from './ToDo';
import Card from './Card';
const ToDoList = ({
  todolist,
  handleToggle,
  deletingCrossed,
  modifying,
  sortByDate,
  tagging,
}) => {
  console.log(todolist);

  return (
    <Card className="todolist">
      <div>
        {todolist.map((todo) => {
          return (
            <div key={todo.id}>
              <ToDo
                key={todo.id}
                todo={todo}
                handleToggle={handleToggle}
                modifying={modifying}
                tagging={tagging}
              />{' '}
            </div>
          );
        })}
        <button onClick={deletingCrossed}>delete crossed</button>
        <button onClick={sortByDate}>sort by date</button>
      </div>
    </Card>
  );
};

export default ToDoList;
