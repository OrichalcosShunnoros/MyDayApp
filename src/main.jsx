import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.jsx'
import '../src/css/index.css'

createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>)
