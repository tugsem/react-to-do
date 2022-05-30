import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoContainer from './components/TodoContainer.js';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
);
