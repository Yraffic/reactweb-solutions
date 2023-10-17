import { ConstructionIcon } from 'lucide-react'
import './styles.scss'

export const Header = () => {
  return (
    <header className='flex-direction h align-items justify-content'>
      <div className='flex manutenção'>
        <ConstructionIcon />
        <h1>Estamos em Manutenção!</h1>
        <ConstructionIcon />
      </div>
      <div className='flex manutenção'>
        <h3>Em breve: Novidades emocionantes! Estamos aprimorando nosso site ReactWeb Solutions para oferecer a você melhores serviços. Voltaremos em breve com uma experiência aprimorada. Agradecemos sua compreensão</h3>
      </div>
    </header>
  )
}
