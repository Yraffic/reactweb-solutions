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
        <a href="#">Sobre nós</a>
        <a href="#">Serviços</a>
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
            Nossa empresa é especializada em criar soluções online sob medida para nossos clientes. Oferecemos serviços de desenvolvimento de sites, 
            web aplicações e landing pages personalizados para atender às suas necessidades específicas.Trabalhamos em estreita colaboração com nossos clientes para garantir que a solução atenda às suas expectativas e 
            requisitos exclusivos. 
          </p>
         <Button />
        </div>
      </div>
    </header>
  )
}