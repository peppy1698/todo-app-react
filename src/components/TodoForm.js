import React, { useState, useEffect, useRef } from 'react';

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            type='text'
            placeholder='Update your Todo... '
            value={input}
            name='text'
            className='todo-input edit'
            onChange={(e) => setInput(e.target.value)}
            ref={inputFocus}
          />
          <button className='todo-button edit'>Update </button>
        </>
      ) : (
        <>
          <input
            type='text'
            placeholder='Enter a Todo... '
            value={input}
            name='text'
            className='todo-input'
            onChange={(e) => setInput(e.target.value)}
            ref={inputFocus}
          />
          <button className='todo-button'>Add Todo</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
