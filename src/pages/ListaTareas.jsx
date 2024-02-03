import "../App.css";
import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";
import { AuthContextProvider } from "../context/AuthContext";

const App = () => {
  return (
    <div>
    <h1>Task Manager</h1>
      <TaskForm supabase={supabase} />
      <TaskList supabase={supabase} />
    </div>
  );
};

export default App;
