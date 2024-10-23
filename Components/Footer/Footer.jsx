import '../../src/css/Footer.css'

export const Footer = ({ pendingCount, clearCompleted, setFilter, currentFilter }) => {
  return (
    <footer id="footer">
      <ul className='fltrs'>
        <li>          
          <p><strong>{pendingCount}</strong> {pendingCount === 1 ? 'item' : 'items'} left</p>
        </li>
        <li>
          <button className={currentFilter === 'all' ? 'selected' : ''} onClick={() => setFilter('all')}>
            All
          </button>
        </li>
        <li>
          <button className={currentFilter === 'pending' ? 'selected' : ''} onClick={() => setFilter('pending')}>
            Pending
          </button>
        </li>
        <li>
          <button className={currentFilter === 'completed' ? 'selected' : ''} onClick={() => setFilter('completed')}>
            Completed
          </button>
        </li>
        <li>
          <button className="clrCompltd" onClick={clearCompleted}>
            Clear completed
          </button>
        </li>
      </ul>
    </footer>
  );
};