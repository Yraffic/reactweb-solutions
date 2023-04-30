import './styles.scss'
import logo from '../../assets/logo.svg'
import insta from '../../assets/instagram .svg'
import wpp from '../../assets/whatsapp.svg'

export const Footer = () => {
    return (
        <footer className='
                flex
        '
        >
            <div className='
                flex
                align-items
                flex-direction
                info-footer
            '
            >
                <img src={logo} alt="logo reactweb solutions" />
                <p>
                    A ReactWeb Solutions foi criada com o objetivo
                    de oferecer soluções digitais de alta qualidade para
                    empresas que buscam se destacar no mercado online.
                </p>
            </div>
            <div></div>
            <nav className='nav-footer flex flex-direction'>
                <p>Links úteis</p>
                <a href="#">Home</a>
                <a href="#information">Sobre nós</a>
                <a href="#services">Serviços</a>
                <a href="#contact">Fale Conosco</a>
            </nav>
            <div className='space'></div>
            <div className='
                media-social
                flex
                align-items
                flex-direction
            '> 
                <p>Redes socias</p>
                <div className=' 
                    flex 
                    align-items
                    justify-content
                '>
                    <a href="">
                        <img src={insta} alt="icone instagram"/>
                    </a>
                    <a href="">
                        <img src={wpp} alt="icone whatsapp" />
                    </a>
                </div>
            </div>
        </footer>
    )
}