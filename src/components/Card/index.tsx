import { ICard } from '../../types'
import { Button } from '../Button'
import './styles.scss'

export const Card = ({ type }: ICard) => {
    return (
        <div className={
            `
        card
        ${type}-card
        flex 
        align-items 
        justify-content
        flex-direction
        `
        }>
            <div className='
                    card-circle 
                    flex align-items 
                    justify-content'>
                <h3>
                    SEO
                </h3>
            </div>
            <div className='
                card-info
                flex 
                align-items 
                justify-content
                flex-direction
            ' >
                {type === "secondary" ? <h3>Desenvolvimento web</h3> : ''}
                <p>
                    Em relação ao SEO, a nossa empresa trabalha com a otimização de sites
                    para que possam ser facilmente encontrados pelos motores de busca,
                    melhorando assim a visibilidade online dos seus clientes.
                    Isso é feito através da escolha de palavras-chave relevantes,
                    criação de conteúdo de qualidade e otimização de meta-tags e descrições.
                </p>
                {
                    type === "secondary" ?
                        ''
                        :
                        <Button type='secondary'>
                            ver mais
                        </Button>
                }
            </div>
        </div>
    )
}