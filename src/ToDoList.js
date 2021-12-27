import React from 'react';
import ToDo from './ToDo';
import Card from './Card';
const ToDoList = ({
  deletingATask,
  callTodo,
  listId,
  listsname,
  todolist,
  handleToggle,
  deletingCrossed,
  modifying,
  sortByDate,
  sortBydatenow,
  tagging,
  up,
  down,
  filteredlist,
  changeList,
  onChangingList,
  confirmChangeList,
  sendingTaskToChangeList,
}) => {
  return (
    <Card className="todolist">
      <div>
        {todolist.map((todo) => {
          return (
            <div key={todo.id}>
              <ToDo
              deletingATask={deletingATask}
              todolist={todolist}
                sendingTaskToChangeList={sendingTaskToChangeList}
                callTodo={callTodo}
                onConfirmFromApp={confirmChangeList}
                appTochangeList={onChangingList}
                changeList={changeList}
                listId={listId}
                listsname={listsname}
                key={todo.id}
                todo={todo}
                handleToggle={handleToggle}
                modifying={modifying}
                tagging={tagging}
                up={up}
                down={down}
              />{" "}
            </div>
          );
        })}
        <button onClick={deletingCrossed}>delete crossed</button>
        <button onClick={sortByDate}>sort by date</button>
        <button onClick={sortBydatenow}>sort by last modification time</button>
      </div>
    </Card>
  );
};

export default ToDoList;
