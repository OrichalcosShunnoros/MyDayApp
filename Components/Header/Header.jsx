import { useState } from "react";
import '../../src/css/Header.css';

export const Header = ({ addTD }) => {
  const [ title, setTitle ] = useState('');

  const add = (e) => {
    if (e.key === 'Enter') {
      addTD(title);
      setTitle('');
    }
  }

  return (
    <header>
      <h1>My Day</h1>
      <p>All my tasks in one place</p>

      <input 
      className="new"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      onKeyPress={add}
      placeholder="Type a new task"
      autoFocus
      />
    </header>
  )
}
