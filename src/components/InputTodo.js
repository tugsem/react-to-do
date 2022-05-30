import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.title.trim()) {
      addTodo(todo.title);
      setTodo({ title: '' });
    } else {
      alert('Please write item');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        name="title"
        type="text"
        placeholder="Add Todo..."
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, [e.target.name]: e.target.value })}
      />
      <button className="input-submit">
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
        />
      </button>
    </form>
  );
};

export default InputTodo;
