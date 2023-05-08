import { motion } from 'framer-motion'
import { useState } from 'react'
import logoSimple from '../../assets/logoSimple.webp'
import navMobile from '../../assets/navmobile.webp'
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
          <img 
            src={navMobile} 
            alt='navbar'
            onClick={showNav}
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
              scale: [0.1, 0.25, 0.5, 0.75, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            
            transition={{
              duration: 5,
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