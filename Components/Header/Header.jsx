import { useState } from 'react';

export const Header = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const add = (e) => {
    if (e.key === 'Enter') {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <header>
      <h1>My Day</h1>
      <p>All my tasks in one place.</p>
      
      <input
        className="new"
        value={ title }
        onChange={ (e) => setTitle(e.target.value) }
        onKeyPress={ add }
        placeholder="Type new todo"
        autoFocus
      />
    </header>
  );
};