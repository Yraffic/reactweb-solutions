import './styles.scss'
import logoSimple from '../../assets/logoSimple.svg'

export const Header = () => {
  return (
    <header>
      <img
      className='img-logo-header'
        src={logoSimple}
        alt='logo'
      />
      <nav>
        <a href="#">Home</a>
        <a href="#">Sobre nós</a>
        <a href="#">Projetos</a>
      </nav>
      <div></div>
    </header>
  )
}