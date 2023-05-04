import './styles.scss'
import yuriPng from '../../assets/yuri.png'

export const Avatar = ()=>{
    return (
        <div className='
            avatar
            flex
            align-items
            justify-content
            flex-direction
        '>
            <img 
            className='avatar-image'
            src={yuriPng} 
            alt="foto ceo yuri" 
            />
            <p>
                CEO e Dsenvolvedor full Stack
            </p>
        </div>
    )
}