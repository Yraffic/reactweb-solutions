import { Button } from '../Button'
import './styles.scss'

export const Forms = () =>{
    return (
        <form  className='
                flex
                align-items
                justify-content
                flex-direction
                forms
        '
        >
            <input type="text" placeholder='Seu Nome ou Empresa'/>
            <input type="email" placeholder='Email'/>
            <input type="number" placeholder='DD + Numero'/>
            <textarea placeholder='fale sobre sua ideia/problema'/>
            <Button type='primary'>
                Enviar
            </Button>
        </form>
    )
}