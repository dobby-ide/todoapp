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
      {todolist.map((todo) => {
        return (
          <div key={todo.id} className="todolist__item">
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
            />{' '}
          </div>
        );
      })}
      <div className="todolist__container">
        <div onClick={deletingCrossed} className="todolist__container--btn">
          delete crossed
        </div>
        <div onClick={sortByDate} className="todolist__container--btn">
          sort by date
        </div>
        <div className="todolist__container--btn" onClick={sortBydatenow}>
          sort by last modified
        </div>
      </div>
    </Card>
  );
};

export default ToDoList;
