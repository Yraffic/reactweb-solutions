import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import './styles.scss'


export const Home = () => {
  return (
    <div >
      <Header />
      <div
        className='
      about 
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
        align-items 
        justify-content'
        >
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
