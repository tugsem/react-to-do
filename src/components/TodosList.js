import React from 'react';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const {
    todos, handleChangeProps, deleteTodoProps, setUpdate,
  } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ listStyleType: 'none' }}>
          <TodoItem
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            setUpdate={setUpdate}
          />
        </li>
      ))}
    </ul>
  );
};
export default TodosList;
