import { useState, useEffect } from 'react';
import { Header } from '../Components/Header/Header';
import { TskList } from '../Components/tskList/tskList'
import { Footer } from '../Components/Footer/Footer';

const LOCAL_STORAGE_KEY = 'mydayapp-reactjs';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    if (title.trim() === '') return;
    const newTodo = { id: Date.now().toString(), title: title.trim(), completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    setTodos(updatedTodos);
  };

  const editTodo = (id, newTitle) => {
    if (newTitle.trim() === '') return;
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle.trim() } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'pending') return !todo.completed;
    if (filter === 'completed') return todo.completed;
  });

  const pendingCount = todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <Header addTodo={addTodo} />

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
}