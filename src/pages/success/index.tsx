import { MailCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { motion } from "framer-motion";
import './styles.scss';


export const Success = () => {
  
  const contacttWpp= () => {
        const text =
            `Olá,%20gostaria%20de%20fazer%20um%20orçamento!`;

        const link =
            `https://wa.me/5598985632581?text=${text}`;

        const whatsapp = document.createElement('a');
        whatsapp.href = link;

        document.body.appendChild(whatsapp);

        whatsapp.click();

        document.body.removeChild(whatsapp);
    };  

  return (
    <div className="success flex align-items justify-content flex-direction">
     <motion.div
       initial={{y: -500}}
       animate={{y: 0}}
       transition={{duration: 0.8}}
     >
        <MailCheck size={150}/>
     </motion.div>
      <motion.h2
      initial={{x: 500}}
      animate={{x: 0}}
      transition={{duration: 0.8}}
      >
        Contato registrado!
      </motion.h2>
      <motion.p
      initial={{x: -500}}
      animate={{x: 0}}
      transition={{duration: 0.8}}
      >
       Alguém de nossa equipe entrará em contato com você 
        ou clique no botão abaixo 
      </motion.p>
      <Button 
      type="secondary"
      onClick={contacttWpp}
      >
          WhatsApp
      </Button>
      <motion.p
        initial={{x: 500}}
        animate={{x: 0}}
        transition={{duration: 0.8}}
      >
        Se você opitar por aguarda o contato que será o mais breve possivel,<br/> 
         <Link to="/">Clique para voltar para pagina principal</Link>
      </motion.p>
    </div>
  );
}
