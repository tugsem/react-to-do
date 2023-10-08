import React from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

const TodoItem = ({
  todo, handleChangeProps, deleteTodoProps, setUpdate,
}) => (
  <div className={styles.item}>
    <input
      type="checkbox"
      className={styles.checkbox}
      checked={todo.completed}
      onChange={() => handleChangeProps(todo.id)}
    />
    <input
      type="text"
      className={todo.completed ? styles.completed : styles.textInput}
      value={todo.title}
      onChange={(e) => {
        setUpdate(e.target.value, todo.id);
      }}
    />
    <button onClick={() => deleteTodoProps(todo.id)} type="button">
      <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
    </button>
  </div>
);

export default TodoItem;
