import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import logoSimple from '../../assets/logoSimple.webp'
import { Button } from '../Button'
import './styles.scss'

export const Header = () => {
  const [showNavbarMobile, setShowNavbarMobile] = useState(false)

  const showNav = () => {
    setShowNavbarMobile(!showNavbarMobile)
  }

  return (
    <header id='home' className='flex align-items justify-content flex-direction'>
      <nav className='conteiner-nav flex align-items justify-content'>
        <img
          className='img-logo-header'
          src={logoSimple}
          alt='logo'
        />
        <div className='hidden-desktop flex'>
          <a href="#home">Home</a>
          <a href="#information">Sobre nós</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Fale Conosco</a>
        </div>

        <div className='hidden-mobile flex flex-direction'>
          <Menu 
            onClick={showNav}
            size={30}
          />
          {showNavbarMobile &&

            <motion.nav
              className='navbar-mobile flex flex-direction'
              onClick={showNav}
              initial={{ right:150 }}
              animate={{ right: 10 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 60
              }}
            >
              <a href="#home">Home</a>
              <a href="#information">Sobre nós</a>
              <a href="#services">Serviços</a>
              <a href="#contact">Fale Conosco</a>
            </motion.nav>
          }
        </div>
      </nav>
      <div className='conteiner-infos flex justify-content'>
        <div className='flex align-items justify-content'>
          <motion.div
            className="
              circle 
              flex 
              align-items 
              justify-content 
              flex-direction
              blur
            "
            animate={{
              scale: [0.4, 0.55, 0.7, 0.85, 1],
              rotate: [0, 0, 20, 20, 0],
              borderRadius: ["10%", "80%", "30%", "50%", "0%"],
            }}
            
            transition={{
              duration: 8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }} 

          >
            <h3>ReactWebSolutions</h3>
            <p>Soluções personalizadas para o seu negócio</p>
          </motion.div>
        </div>
        <div className='info flex align-items justify-content flex-direction'>
          <h1>
            Facilite seu desenvolvimento web.
          </h1>
          <p>
          Destaque sua empresa na internet com uma solução online exclusiva! Desenvolvemos sites, programas e aplicativos sob medida para suas necessidades. Conte conosco para levar seu negócio para o próximo nível!
          </p>
            <a href="#contact">
              <Button type='primary'>
                Contato
              </Button>
            </a>
        </div>
      </div>
    </header>
  )
}