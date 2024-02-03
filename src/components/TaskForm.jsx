import { useState } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ supabase }) => {
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setMessage('Please enter a valid title.');
      return;
    }

    setIsLoading(true);
    setMessage('');
    const { error } = await supabase.from('tasks').insert([{ title }]);
    
    setIsLoading(false);
    if (error) {
      console.error('Error adding task:', error.message);
      setMessage('Failed to add task.');
    } else {
      setTitle('');
      setMessage('Task added successfully!');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          disabled={isLoading}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add Task'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

TaskForm.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default TaskForm;
