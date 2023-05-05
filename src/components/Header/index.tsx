import './styles.scss'
import logoSimple from '../../assets/logoSimple.svg'
import logo from '../../assets/logo.svg'
import { Button } from '../Button'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { motion } from 'framer-motion'

export const Header = () => {
  const [showNavbarMobile, setShowNavbarMobile] = useState(false)

  const showNav = () => {
    setShowNavbarMobile(!showNavbarMobile)
  }

  return (
    <header className='flex align-items justify-content flex-direction'>
      <nav className='conteiner-nav flex align-items justify-content'>
        <img
          className='img-logo-header'
          src={logoSimple}
          alt='logo'
        />
        <div className='hidden-desktop flex'>
          <a href="#">Home</a>
          <a href="#information">Sobre nós</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Fale Conosco</a>
        </div>

        <div className='hidden-mobile flex flex-direction'>
          <HamburgerIcon
            className='navbar-icon-mobile'
            onClick={showNav}
          />
          {showNavbarMobile &&

            <motion.nav
              className='navbar-mobile flex flex-direction'
              onClick={showNav}
              initial={{ right: "40rem" }}
              animate={{ right: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >
              <a href="#">Home</a>
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
            className="circle flex align-items justify-content blur"
            animate={{
              scale: [1, 1.2, 1, 1.2, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["50%", "50%", "50%", "50%", "50%"],
            }}
            
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}

          >
            <img src={logo} alt="logo react web" />
          </motion.div>
        </div>
        <div className='info flex  flex-direction'>
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