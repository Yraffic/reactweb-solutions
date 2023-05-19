import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import './styles.scss';

type FormValues = {
    name: string;
    email: string;
    number: string;
    infor: string;
};

export const Forms = () => {
    const { register, handleSubmit} = useForm<FormValues>();
    const [erro, setErro] = useState('');

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        if (data.name === '') {
            return setErro('Nome deve ser informado !');
        }
        const description = data.infor.replace(' ', '%20');

        const text =
            `Oi,%20sou%20${data.name}.%20Gostaria%20de%20fazer%20um%20orçamento!%20sobre%20${description}`;

        const link =
            `https://wa.me/5598985632581?text=${text}`;

        const whatsapp = document.createElement('a');
        whatsapp.href = link;

        document.body.appendChild(whatsapp);

        whatsapp.click();

        document.body.removeChild(whatsapp);
    };

    return (
        <form
            className='flex align-items justify-content flex-direction forms'
            onSubmit={handleSubmit(onSubmit)}
        >
            <input
                type="text"
                placeholder='Seu Nome ou Empresa'
                {...register('name')}
                className='blur'
            />
            <span>{erro}</span>
            <input
                type="email"
                {...register('email')}
                placeholder='Email'
            />
            <input
                type="text"
                placeholder='DD + Numero'
                {...register('number')}
            />
            <textarea
                placeholder='fale sobre sua ideia/problema'
                {...register('infor')}
            />
            <button type='submit' className='btn primary'>
                Enviar
            </button>
        </form>
    );
};
