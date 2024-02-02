import googlelogo from "../assets/logogoogle.png";
import { Perfil } from "../components/Perfil";
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { UserAuth } from "../context/AuthContext";
import { supabase } from "../supabase/supabase.config";

export function Home() {
  const {user, signout} = UserAuth();
 
  return ( <div className="App">
   <Perfil foto={user.picture} name={user.name} email={user.email}/>
   
  <h1>TASK G4</h1>
    <div>
      <h1>Task Manager</h1>
      <TaskForm supabase={supabase} />
      <TaskList supabase={supabase} />
    </div>
  <img src={googlelogo} className="logo google" alt="React logo" />
  <div className="card">
    <button onClick={signout} >Cerrar sesión</button>
    <p>Olmedo Angelo</p>
    <p>Narvaez Jilson</p>
  </div>
  <p className="read-the-docs">
    Supabase implementa todo el poder de PostgreSQL
  </p>

</div>);
}
