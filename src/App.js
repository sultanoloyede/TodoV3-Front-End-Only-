import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import styled from 'styled-components';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default App;
