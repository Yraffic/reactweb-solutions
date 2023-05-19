import { MailCheck } from "lucide-react";
import './styles.scss'
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";


export const Success = () => {

  return (
    <div className="success flex align-items justify-content flex-direction">
      <MailCheck size={150}/>
      <h2>Contato registrado!</h2>
      <p>
       Alguém de nossa equipe entrará em contato com você 
        ou clique no botão abaixo 
      </p>
      <Button type="secondary">
          WhatsApp
      </Button>
      <p>
        Se você opitar por aguarda o contato que será o mais breve possivel,<br/> 
         <Link to="/home">Clique para voltar para pagina principal</Link>
      </p>
    </div>
  );
}
