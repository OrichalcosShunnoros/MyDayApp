import '../../src/css/Footer.css';
import { NavLink } from 'react-router-dom';

export const Footer = ({ pendingCount, clearCompleted }) => {
  return (
    <footer className="footer" id="footer">
      <ul className="fltrs">
        <li>
          <p><strong>{pendingCount}</strong> {pendingCount === 1 ? 'item' : 'items'} left</p>
        </li>
        <li>
          <NavLink to="/all" className={({ isActive }) => (isActive ? 'active' : '')}>All</NavLink>
        </li>
        <li>
          <NavLink to="/pending" className={({ isActive }) => (isActive ? 'active' : '')}>Pending</NavLink>
        </li>
        <li>
          <NavLink to="/completed" className={({ isActive }) => (isActive ? 'active' : '')}>Completed</NavLink>
        </li>
        <li>
          <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
        </li>
      </ul>
    </footer>
  );
};
