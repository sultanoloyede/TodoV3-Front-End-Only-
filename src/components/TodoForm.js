import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Form = styled.form `
  margin-bottom: 32px;
`

const TodoInputEdit = styled.input`
  border: 2px solid #149fff;
`

const TodoButtonEdit = styled.button`
  background: linear-gradient(
    90deg,
    rgb(200, 20, 255) 0%,
    rgb(255, 17, 203) 100%
  );
  padding: 16px 22px;
`

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <TodoInputEdit
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
          />
          <TodoButtonEdit onClick={handleSubmit}>
            Update
          </TodoButtonEdit>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </Form>
  );
}

export default TodoForm;
