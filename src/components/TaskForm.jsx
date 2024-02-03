import { useState } from 'react';
import PropTypes from 'prop-types';


const TaskForm = () => {
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

  const handleLoginWithFacebook = async () => {
    try {
      // Inicia sesión con Facebook a través de Supabase
      const { error } = await supabase.auth.signIn({
        provider: 'facebook',
      });

      if (error) {
        throw error;
      }

      console.log('Logged in with Facebook:', supabase.auth.user());
    } catch (error) {
      console.error('Error logging in with Facebook:', error.message);
    }
  };

  return (
    <div>
      <button onClick={handleLoginWithFacebook}>
        <img src="../src/assets/logo.png" alt="Facebook Logo" width={30} height={30}/> Facebook
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default TaskForm;
