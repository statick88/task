'use client'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Task List</h2>
      <ul className="mt-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between py-2">
            <span className="text-gray-800 dark:text-white">{task.title}</span>
            <button
              onClick={() => deleteTask(task.id)}
              className="px-4 py-2 ml-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

TaskList.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default TaskList;