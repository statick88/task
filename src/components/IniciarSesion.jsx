import { Button, FormControl, FormLabel, Heading, Stack } from "@chakra-ui/react";
import { FcGoogle } from 'react-icons/fc';
import UseForm from "../hooks/UseForm";

const initialState = {
    Correo: '',
    Contra: ''
}
const IniciarSesion = () => {  

    const { formValues, handleInputChange} = UseForm(initialState)
    const { Correo, Contra } = formValues

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signInWithEmail(formValues)

    }
    return (
            <>  
            <Heading fontSize='2xl' mb='20px'> Iniciar Sesion</Heading> 
            <form onSubmit={handleSubmit}> 
                <Stack spacing={4}>
                    <FormControl id='LCorreo'>
                        <FormLabel>Correo</FormLabel>
                        <input type='email' name='Correo' value={Correo} onChange={handleInputChange}/>
                    </FormControl>
                    <FormControl id='LContra'>
                        <FormLabel>Contraseña</FormLabel>
                        <input type='password' name='Contra' value={Contra} onChange={handleInputChange}/>
                    </FormControl>
                    <Button colorScheme='blue' type='submit'>Iniciar sesion</Button>
                    <Button leftIcon={<FcGoogle />}  variant='solid'>
                         Iniciar sesion con Google
                    </Button>
                </Stack>
                    
            </form>
            </>     
    );
}

export default IniciarSesion