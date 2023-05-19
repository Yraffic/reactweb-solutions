import ux from '../../assets/ux.svg';
import web from '../../assets/web.svg';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
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
            <h2>Nossa missão é desenvolver os melhores websites do mundo!</h2>
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
        <section id='detail-services'>
          <div className='detail flex align-items'>
            <div className='info-detail flex align-items justify-content'>
              <h1>Desenvolvimento web</h1>
              <p>
              O desenvolvimento web cria aplicativos, sites, landing pages e blogs incríveis. Com objetivos claros em mente, escolhemos as melhores tecnologias. Nossos sites são intuitivos e responsivos, garantindo uma ótima experiência ao usuário. As landing pages são otimizadas para conversão, com um design atraente e chamadas para ação convincentes. Nossos blogs compartilham informações valiosas de forma concisa e envolvente. Construa sua presença online de forma eficiente e impactante com nossos serviços de desenvolvimento web.
              </p>
              <a href="#contact">
                <Button type='primary'>
                    Entrar em contato
                </Button>
              </a>
            </div>
            <img src={web} alt="imagem de um notebook" />
          </div>
          <div className='detail flex align-items'>
          <img src={ux} alt="imagem de um celular" />
            <div className='info-detail flex align-items justify-content'>
              <h1>UI/UX</h1>
              <p>
              Nosso serviço de UI/UX oferece experiências digitais excepcionais. Criamos interfaces intuitivas e visualmente atraentes, focadas na usabilidade e na satisfação do usuário. Nossa abordagem centrada no usuário garante que cada interação seja fluida e envolvente. Combinamos design estético com funcionalidade prática, resultando em soluções eficientes e impactantes. Aprimore a experiência do seu público-alvo com nosso serviço especializado de UI/UX.Nosso serviço de UI/UX oferece experiências digitais excepcionais. Criamos interfaces intuitivas e visualmente atraentes, focadas na usabilidade e na satisfação do usuário. Nossa abordagem centrada no usuário garante que cada interação seja fluida e envolvente. Combinamos design estético com funcionalidade prática, resultando em soluções eficientes e impactantes. Aprimore a experiência do seu público-alvo com nosso serviço especializado de UI/UX.
              </p>
              <a href='#contact'>
                <Button type='primary'>
                    Entrar em contato
                </Button>
              </a>
            </div>
          </div>
        </section>
        <section className='
                flex
                align-items
                justify-content
            '>
        <Avatar />
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
    </div>
  );
}
