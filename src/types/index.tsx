import { ReactNode } from 'react';

export interface IButtonProps {
    children: ReactNode;
    type: string
    onClick?: () => void
}

export interface ICard {
    type:string
    onOpen?: () => void;
}

export interface IAppcontext {
    openModal: boolean
    setOpenModal: (value: boolean)=> void
}

export interface IChildren {
    children: ReactNode
}