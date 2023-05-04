import { Box, ChakraProvider, Spinner } from "@chakra-ui/react"

export const Loader = () =>{
    return (
        <ChakraProvider>
            <Box  
                height='100vh'
                width='100vw'
                backgroundColor='#1B1B1B'
                display='flex'
                alignItems='center'
                justifyContent='center'
                className='loader'
            >
                <Spinner 
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='#151515'
                    color='#3FE8AB'
                    size='xl'
                />
            </Box>
        </ChakraProvider>
    )
}