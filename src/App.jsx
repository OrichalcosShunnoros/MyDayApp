import { TskList } from './Components/tskList/tskList'
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'mydayapp-reactjs';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (storedTodos) {
      setTodos(storedTodos);
      setFilteredTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    if (title.trim() === '') return;
    const newTodo = { id: Date.now().toString(), title: title.trim(), completed: false };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo);

    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const editTodo = (id, newTitle) => {
    if (newTitle.trim() === '') return;

    const updatedTodos = todos.map((todo) => todo.id === id ? { ...todo, title: newTitle.trim() } : todo);
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const clearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);

    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const pendingCount = todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <Header addTodo={addTodo} todos={todos} setFilteredTodos={setFilteredTodos} />

      {todos.length > 0 && (
        <div className="content">
          <TskList
            todos={filteredTodos}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />

          <Footer
            pendingCount={pendingCount}
            clearCompleted={clearCompleted}
            setFilter={setFilter}
            currentFilter={filter}
          />
        </div>
      )}
    </>
  );
};
