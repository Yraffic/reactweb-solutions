import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import './styles.scss'


export const Home = ()=>{
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
        <div className='
        about-cards 
        flex
        align-items 
        justify-content'
        >
          <Card />
        </div>
     </div>
    </div>
  );
}
