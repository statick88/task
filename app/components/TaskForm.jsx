'use client'
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
    } catch (error) {
      console.error('Error adding task:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5">
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-4 py-2 mb-2 rounded-md dark:bg-gray-700 dark:text-white"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
        Add Task
      </button>
    </form>
  );
};

TaskForm.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default TaskForm;