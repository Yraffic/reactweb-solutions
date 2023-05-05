import { useContext } from 'react'
import { Button } from '../Button'
import './styles.scss'
import { AppContext } from '../../context/AppContext'

export const ModalInfo = () => {
    const {setOpenModal} = useContext(AppContext)
    return (
        <div className="
            modal
        ">
            <h1>Seo</h1>
            <p>
                Em relação ao SEO, a nossa empresa trabalha com a otimização de sites
                para que possam ser facilmente encontrados pelos motores de busca,
                melhorando assim a visibilidade online dos seus clientes.
                Isso é feito através da escolha de palavras-chave relevantes,
                criação de conteúdo de qualidade e otimização de meta-tags e descrições.
            </p>
            <Button 
                type='secondary'
                onClick={()=> setOpenModal(false)}
            >
                Fechar
            </Button>
        </div>
    )

}