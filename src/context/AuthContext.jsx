import { createContext, useEffect, useState }  from "react";
import { supabase } from "../api/config";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({

    user: null

})

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange( async () => checkUser())
        const checkUser = async () => {
            const user = supabase.auth.user()
           
            
        }

        return () => {
            authListener?.unsubscribe()
        }

    }, [])


    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}