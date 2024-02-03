import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TaskList = ({ supabase }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchTasks() {
      setLoading(true);
      setError('');
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
        console.error('Error al obtener las tareas:', error.message);
        setError('Error al cargar las tareas.');
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, [supabase]);

  async function deleteTask(id) {
    if (window.confirm('¿Estás seguro de querer eliminar esta tarea?')) {
      try {
        const { error } = await supabase.from('tasks').delete().eq('id', id);
        if (error) {
          throw error;
        }
        setTasks(tasks.filter((task) => task.id !== id));
      } catch (error) {
        console.error('Error al eliminar la tarea:', error.message);
      }
    }
  }

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id}>
              {task.title}
              <button onClick={() => deleteTask(task.id)}>Eliminar</button>
            </li>
          ))
        ) : (
          <p>No se encontraron tareas.</p>
        )}
      </ul>
    </div>
  );
};

TaskList.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default TaskList;
