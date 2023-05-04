import { Spinner } from "@chakra-ui/react"

export const Loader = () => {
    return (
        <Spinner
            position='fixed'
            top='50%'
            left='50%'
            thickness='4px'
            speed='0.65s'
            emptyColor='#151515'
            color='#3FE8AB'
            size='xl'
        />
    )
}