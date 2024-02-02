// CompletedTasks.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CompletedTasks = ({ supabase }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        let { data: tasks, error } = await supabase
          .from('tasks')
          .select('*')
          .eq('completed', true) // Solo selecciona las tareas completadas
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

  return (
    <div>
      <h2>Completed Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

CompletedTasks.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default CompletedTasks;
