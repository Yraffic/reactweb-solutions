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
        <a href="#">Projetos</a>
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
            web aplicações e landing pages personalizados para atender às suas necessidades específicas. Com a nossa equipe de desenvolvedores experientes e dedicados, 
            garantimos que sua presença online seja de primeira classe. Além disso, trabalhamos em estreita colaboração com nossos clientes para garantir que a solução atenda às suas expectativas e 
            requisitos exclusivos. Se você deseja criar um site impressionante, 
            uma aplicação online complexa ou uma landing page eficaz, temos a expertise para ajudá-lo a alcançar seus objetivos online.
          </p>
         <Button />
        </div>
      </div>
    </header>
  )
}