import { ReactNode } from 'react';

export interface IButtonProps {
    children: ReactNode;
    type: string
    onClick?: () => void
}

export interface ICard {
    type:string
    onOpen?: () => void;
    title: string
    description: string
}

export interface IAppcontext {
    openModal: boolean
    setOpenModal: (value: boolean)=> void
}

export interface IChildren {
    children: ReactNode
}

export interface IData {
    id: number
    title: string
    description: string
}