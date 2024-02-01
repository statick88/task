import { supabase } from "../api/config";


export const signUpWithEmail = async (data) => {
    let result;
    try {
        result = await supabase.auth.signUp(data)
        return result
    } catch (error) {
        console.log(error)
    }
    return result
}

export const updateProfile = async (data) => {

    try {
        await supabase.from('profiles').upsert(data, { returning: 'minimal'})
    } catch (error) {
        console.log(error)
    }

}

export const signInWithEmail = async (data) => {
    let result;
    try {
        result = await supabase.auth.signIn(data)
        return result
    } catch (error) {
        console.log(error)
    }
    return result
}

