// TaskForm.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ supabase }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      const { error } = await supabase.from('tasks').insert([{ title }]);
      if (error) {
        throw error;
      }
      setTitle('');
      window.location.reload(); // para que se actualice despues de agregar
    } catch (error) {
      console.error('Error adding task:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>

    </form>
  );
};

TaskForm.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default TaskForm;
