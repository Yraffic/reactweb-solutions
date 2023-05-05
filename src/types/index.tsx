import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IButtonProps {
    children: ReactNode;
    type: string
    onClick?: () => void
}

export interface ICard {
    type:string
    onOpen?: () => void;
}