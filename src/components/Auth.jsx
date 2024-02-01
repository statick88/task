    import { Grid, GridItem } from '@chakra-ui/react'
    import IniciarSesion from './IniciarSesion'
    import Registro from './Registro'
    
    const Auth = () => {  

        return (
            <Grid templateColumns='repeat(3, 300px)' gap={100} placeContent='center'>
                <GridItem>
                    <Registro />
                </GridItem>
                <GridItem>
                    <IniciarSesion />
                </GridItem>
              
            </Grid>
        )
    }

    export default Auth  