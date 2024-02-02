// TaskForm.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ supabase }) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      const { error } = await supabase.from('tasks').insert([{ title, completed }]);
      if (error) {
        throw error;
      }
      setTitle('');
      setCompleted(false);
    } catch (error) {
      console.error('Error adding task:', error.message);
    }
  };

  return (
    <div >
      <div className="card w-500">
        <div className="card-body">
          <h5 className="card-title text-center">Add Task</h5>
          <form onSubmit={handleSubmit} className="mb-3">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="taskTitle"
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="taskCompleted"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="taskCompleted">Completed</label>
            </div>
            <button type="submit" className="btn btn-primary ">Add Task</button>
          </form>
        </div>
      </div>
    </div>
  );
};

TaskForm.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default TaskForm;
