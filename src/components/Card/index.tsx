import { ICard } from '../../types'
import './styles.scss'

export const Card = ({ type,title, description, onOpen }: ICard) => {

    return (
        <div className={
            `
        card
        ${type}-card
        flex 
        align-items 
        justify-content
        flex-direction
        blur
        `
        }>
            <div className='
                    card-circle 
                    flex 
                    align-items 
                    justify-content'
            >
                <h3>
                    {title}
                </h3>
            </div>
            <div className='
                card-info
                flex 
                align-items 
                justify-content
                flex-direction
            ' >
                {type === "secondary" ? <h3>{title}</h3> : ''}
                <p>
                   {description}
                </p>
               <a href="#hover">Clique para ver mais</a>
            </div>
        </div>
    )
}