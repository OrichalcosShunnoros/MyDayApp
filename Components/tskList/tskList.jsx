import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../src/css/tskList.css';

export const TskList = ({ todos, toggleTodo, editTodo, deleteTodo }) => {
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const location = useLocation();

  const editFunction = (id, title) => {
    setEditingId(id);
    setNewTitle(title);
  };

  const keyPressFunction = (e, id) => {
    if (e.key === 'Enter') {
      editTodo(id, newTitle);
      setEditingId(null);
    } else if (e.key === 'Escape') {
      setEditingId(null);
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (location.pathname === '/pending') return !todo.completed;
    if (location.pathname === '/completed') return todo.completed;
    return true;
  });

  return (
    <ul className="tdLst">
      {filteredTodos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          {editingId === todo.id ? (
            <input
              className="edit"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onKeyDown={(e) => keyPressFunction(e, todo.id)}
              autoFocus
            />
          ) : (
            <>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <label onDoubleClick={() => editFunction(todo.id, todo.title)}>{todo.title}</label>
              <button className="destroy" onClick={() => deleteTodo(todo.id)}>❌</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};
