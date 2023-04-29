import './styles.scss'
import logoSimple from '../../assets/logoSimple.svg'
import logo from '../../assets/logo.svg'
import { Button } from '../Button'

export const Header = () => {
  return (
    <header className='flex align-items justify-content flex-direction'>
      <nav className='conteiner-nav flex align-items'>
        <img
          className='img-logo-header'
          src={logoSimple}
          alt='logo'
        />
        <a href="#">Home</a>
        <a href="#information">Sobre nós</a>
        <a href="#services">Serviços</a>
        <a href="#">Fale Conosco</a>
        <div></div>
      </nav>
      <div className='conteiner-info flex'>
        <div className='flex align-items justify-content'>
          <div className="circle flex align-items justify-content">
            <img src={logo} alt="logo react web" />
          </div>
        </div>
        <div className='info flex flex-direction'>
          <h1>
            Facilite seu desenvolvimento web.
          </h1>
          <p>
            Nossa empresa é especializada em criar soluções online sob medida e exclusiva para nossos clientes.
            Deseja desenvolver um site para sua empresa? Programas, Aplicativos
            ou landing pages? Criamos!
          </p>
          <Button type='primary'>
            Contato
          </Button>
        </div>
      </div>
    </header>
  )
}