// TaskForm.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import EmailSender from './Correo';

const TaskForm = ({ supabase }) => {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      EmailSender.sendEmail(email, `Saludos, se le asignó la tarea: ${title}`);
      const { error } = await supabase.from('tasks').insert([{ title, email }]);
      if (error) {
        throw error;
      }
      setTitle('');
      setEmail('');
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
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

TaskForm.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default TaskForm;
