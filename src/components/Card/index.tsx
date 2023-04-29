import { Button } from '../Button'
import './styles.scss'

export const Card = () =>{
    return (
        <div className='
        card 
        flex 
        align-items 
        justify-content
        flex-direction'>
            <div className='
                    card-circle 
                    flex align-items 
                    justify-content'>
                <h3>
                    SEO
                </h3>
            </div>
            <p>
            Em relação ao SEO, a nossa empresa trabalha com a otimização de sites 
            para que possam ser facilmente encontrados pelos motores de busca, 
            melhorando assim a visibilidade online dos seus clientes. 
            Isso é feito através da escolha de palavras-chave relevantes, 
            criação de conteúdo de qualidade e otimização de meta-tags e descrições.
            </p>
            <Button type='secondary'>
                ver mais
            </Button>
        </div>
    )
}