// TaskList.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const TaskList = ({ supabase }) => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    async function fetchTask() {
      try {
        let { data: task, error } = await supabase
          .from('task')
          .select('*')
          .order('id', { ascending: true });

        if (error) {
          throw error;
        }

        setTask(task);
      } catch (error) {
        console.error('Error fetching task:', error.message);
      }
    }

    fetchTask();
  }, [supabase]);

  async function deleteTask(id) {
    try {
      await supabase.from('task').delete().eq('id', id);
      setTask(task.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error.message);
    }
  }

  return (
    <div>
      <center>
      <h2 >Task List</h2>
      <ul>
        {task.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      </center>
    </div>
  );
};

TaskList.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default TaskList;
