'use client'
import { createClient } from '@supabase/supabase-js';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// Configurar el cliente Supabase

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
const supabase2 = createClientComponentClient();
const App = () => {
    const router = useRouter()
    const handleLogout = async () => {
        await supabase2.auth.signOut();
        router.push('/signin');
        setUser(null)

    }
    const [user, setUser] = useState(null);
  return (
    
                <>
                <button 
                    onClick={handleLogout}
                    className="w-full p-3 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none"
                >
                    Logout
                </button>
            
      <h1 className='text-3xl font-bold text-center mt-8 text-black'>Task Manager</h1>
      <TaskForm supabase={supabase} />
      <TaskList supabase={supabase} />
                </>
    
    
  );
};

export default App;