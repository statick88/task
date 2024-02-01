// App.jsx
import { createClient } from '@supabase/supabase-js';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './index.css';
import AppRouter from './Router';
//import Auth from './components/Auth';
import { Container, Grid } from '@chakra-ui/react';
import Auth from './components/Auth';


// Configurar el cliente Supabase
const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


const App = () => {
  return (
    <div>
      <Container maxW='100%' h='100vh'> 
        <Auth />
      <Grid>
      <h1>Task Manager</h1>
      <TaskForm supabase={supabase} />
      <TaskList supabase={supabase} />
      </Grid>
      </Container>
    </div>
  );
};

export default App;
