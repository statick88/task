// App.jsx
import { createClient } from '@supabase/supabase-js';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import CompletedTasks from './components/CompletedTasks';
import './index.css';

// Configurar el cliente Supabase
const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const App = () => {
  return (
    <Router>
      <div className="container mt-3">
        <h1 className="text-center mb-4">Task Manager</h1>
        <div className="d-flex justify-content-end mb-3">
          <Link to="/" className="btn btn-primary me-2">Home</Link>
          <Link to="/completed" className="btn btn-secondary">Completed Tasks</Link>
        </div>
        <Routes>
          <Route path="/" element={<><TaskForm supabase={supabase} /><TaskList supabase={supabase} /></>} />
          <Route path="/completed" element={<CompletedTasks supabase={supabase} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

