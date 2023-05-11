import { Avatar } from '../../components/Avatar';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Forms } from '../../components/Form';
import { Header } from '../../components/Header';
import { services, techniques } from '../../data';
import './styles.scss';


export const Home = () => {

  return (
    <div>
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
              A ReactWeb Solutions oferece soluções de software personalizadas para uma ampla variedade de clientes e aplicativos. Nós nos destacamos por nosso conhecimento especializado em desenvolvimento de software e por utilizar as melhores técnicas de desenvolvimento SEO, performance e exclusividade.
            </p>
            <div className='
              about-cards 
              flex
              align-items'
            >
              {
                techniques.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      type='primary'
                      title={item.title}
                      description={item.description}
                    />
                  )
                })
              }
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
              {
                services.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      type='secondary'
                      title={item.title}
                      description={item.description}
                    />
                  )
                })
              }
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
      <section className='
                flex
                align-items
                justify-content
            '>
        <Avatar />
      </section>
      <Footer />
    </div>
  );
}
