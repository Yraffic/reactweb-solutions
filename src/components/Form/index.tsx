import './styles.scss';

export const Forms = () => {
    return (
        <form
            className='flex align-items justify-content flex-direction forms'
            action="https://formsubmit.co/reactweb2023@gmail.com" 
            method="POST"
        >
            <input
                type="text"
                placeholder='Seu Nome ou Empresa'
                name='name'  
                required
                className='blur'
            />
            <input
                type="email"
                name='email'
                placeholder='Email'
                required
            />
            <input
                type="text"
                placeholder='DD + Numero'
                name='number'
                required
            />
            <textarea
                placeholder='fale sobre sua ideia/problema'
                name='description'
                required
            />
            <input type="hidden" name='_next' value='http://localhost:3000/sucesso' />
            <input 
                type="hidden" 
                name='_autoresponse' 
                value='Recebemos sua mensagem, obrigado pelo contato e logo responderemos' 
            />
            <input type="hidden" name="_template" value="table"/>
            <button type='submit' className='btn primary'>
                Enviar
            </button>
        </form>
    );
};
