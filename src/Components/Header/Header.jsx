import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../css/Header.css';

export const Header = ({ addTodo, todos, setFilteredTodos }) => {
  const [inputValue, setInputValue] = useState('');
  const [isSearchMode, setIsSearchMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isSearchMode) {
      searchTasks(inputValue);
    }
  }, [inputValue, isSearchMode]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isSearchMode) {
      addTodo(inputValue);
      setInputValue('');
    } else if (e.key === 'Escape') {
      exitSearchMode();
    }
  };

  const handleDoubleClick = () => {
    if (location.pathname === '/all') {
      setIsSearchMode(true);
    }
  };

  const searchTasks = (query) => {
    if (query.trim() !== '') {
      const filtered = todos.filter((todo) => todo.title.toLowerCase().includes(query.toLowerCase()));
      setFilteredTodos(filtered);
    } else {
      setFilteredTodos(todos);
    }
  };

  const exitSearchMode = () => {
    setIsSearchMode(false);
    setInputValue('');
    setFilteredTodos(todos);
  };

  return (
    <header>
      <h1>My Day</h1>
      <p>All my tasks in one place</p>
      
      <input
        className={isSearchMode ? 'search' : 'new'}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        onDoubleClick={handleDoubleClick}
        placeholder={isSearchMode ? '🔍 Search todo' : 'Type new todo'}
        autoFocus
      />
    </header>
  );
};
