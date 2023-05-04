import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Forms } from '../../components/Form';
import { Header } from '../../components/Header';
import './styles.scss'
import { Loader } from '../../components/Loader';


export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500); 
  }, []);

  return (
    <div >
      {
        isLoading ?
        <div className='loader'>
          <Loader />
        </div>
          :
          <>
            <Header />
            <main id='information'>
              <section id='about'>
                <div
                  className='
              conteiner 
              flex 
              align-items 
              justify-content 
              flex-direction'
                >
                  <h2>Nossa empresa</h2>
                  <p>
                    A ReactWeb Solutions é capaz de criar e projetar soluções de software
                    para uma ampla variedade de clientes e aplicativos. Além de ser especializada em desenvolvimento de software,
                    a sua empresa também se destaca por utilizar as melhores técnicas de desenvolvimento SEO, performance e exclusividade.
                  </p>
                  <div className='
              about-cards 
              flex
              align-items'
                  >
                    <Card type='primary' />
                    <Card type='primary' />
                    <Card type='primary' />
                  </div>
                </div>
              </section>
              <section
                id='services'
              >
                <div
                  className='
            conteiner
            flex 
            align-items 
            justify-content 
            flex-direction
            '
                >
                  <h2>Serviços</h2>
                  <div className='
                  conteiner-services 
                  flex
                  align-items
                  '
                  >
                    <Card type='secondary' />
                    <Card type='secondary' />
                    <Card type='secondary' />
                  </div>
                </div>
              </section>
              <section id='contact'>
                <div className='
                conteiner
                flex 
                align-items 
                justify-content 
                flex-direction
          '
                >
                  <h2>Fale Conosco</h2>
                  <h3>E daremos sua solução!</h3>
                  <Forms />
                </div>
              </section>
            </main>
            <Footer />
          </>
      }
    </div>
  );
}
