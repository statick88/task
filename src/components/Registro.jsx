import { Button, FormControl, FormLabel, Heading, Stack } from "@chakra-ui/react";
import UseForm from "../hooks/UseForm";
import { signUpWithEmail, updateProfile } from "../services/auth";
import { supabase } from "../api/config";

const initialState = {
    Nombre: '',
    Correo: '',
    Contra: ''
}

const Registro = () => {  
    

    const { formValues, handleInputChange} = UseForm(initialState)
    const { Nombre, Correo, Contra } = formValues
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await signUpWithEmail({Correo, Contra})
        if(result){
            const user = supabase.auth.user()
            const  data = {
                id: user.id,
                full_name: user.Nombre
            }
            await updateProfile(data)
        }

    }
    
    return (
        <>  
        <Heading fontSize='2xl' mb='20px'> Registro de Usuario</Heading> 
        <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
                <FormControl id='Nombre'>
                    <FormLabel>Nombre</FormLabel>
                    <input type='text' name='Nombre' value={Nombre} onChange={handleInputChange}/>
                </FormControl>
                <FormControl id='Correo'>
                    <FormLabel>Correo</FormLabel>
                    <input type='email' name='Correo' value={Correo} onChange={handleInputChange}/>
                </FormControl>
                <FormControl id='Contra'>
                    <FormLabel>Contraseña</FormLabel>
                    <input type='password' name='Contra'value={Contra} onChange={handleInputChange}/>
                </FormControl>
                <Button colorScheme='blue' type='submit'>Registrar</Button>
            </Stack>
                
        </form>
        </>  
    );
}

export default Registro  