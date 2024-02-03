// TaskList.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//impota el componente de Aut.jsx
import FacebookLoginButton from './Aut';

const TaskList = ({ supabase }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        let { data: tasks, error } = await supabase
          .from('tasks')
          .select('*')
          .order('id', { ascending: true });

        if (error) {
          throw error;
        }

        setTasks(tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error.message);
      }
    }

    fetchTasks();
  }, [supabase]);

  async function deleteTask(id) {
    try {
      await supabase.from('tasks').delete().eq('id', id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error.message);
    }
  }

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <FacebookLoginButton />
    </div>
  );
};



TaskList.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default TaskList;
