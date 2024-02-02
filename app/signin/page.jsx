'use client';

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import LoadPage from "../components/LoadPage";
export default function SigInPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const supabase = createClientComponentClient();

    useEffect(() => {
        async function getUser(){
            const {data: {user}} = await supabase.auth.getUser()
            setUser(user)
            setLoading(false)
        }

        getUser();
    }, [])

    const handleClose = () => {
        setShow(false);
        setError('');
      };

   
    

    const handleSignIn = async () => {
        try{
            const res = await supabase.auth.signInWithPassword({
                email,
                password
            })
            console.log(res)
        
            if (res.error){
                throw res.error
            }
            setUser(res.data.user)
            router.refresh();
        }catch (error){
            console.log('Error signing in:', error.message)
            setError(error.message)
            setShow(true)
        }
    }

   


    if (loading){
        return <LoadPage />;
    }

    if (user){
        return router.push('/tasks')
    }

    return (
        <>
         {show && (
      <div className="fixed inset-x-0 top-0 flex items-center justify-center">
      <div className="bg-red-500 text-white p-4 rounded-md shadow-lg">
        <p>{error}</p>
        <button
          onClick={handleClose}
          className="mt-2 px-4 py-2 bg-red-700 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
    
    )}
        <main className="h-screen flex items-center justify-center bg-gray-800 p-6">
           
           <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">
              <h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-gray-300">
                Sign In
                </h1>
              <label htmlFor="email" className="text-gray-400">Email</label>

           <input 
               type="email" 
               name="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Email"
               className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
           />
              <label htmlFor="password" className="text-gray-400">Password</label>
           <input 
               type="password" 
               name="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Password"
               className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
           />
          
           <button 
               onClick={handleSignIn}
               className="w-full p-3 rounded-md bg-green-600 text-white hover:bg-green-700 focus:outline-none"
           >
               Sign In
           </button>
              <p className="text-center text-gray-400">
                            Don't have an account?{' '}
                            <Link href="/signup" className="text-blue-500">
                             Sign Up
                            </Link>
                      </p>
           </div>
           </main>
        </>
        
    )

}