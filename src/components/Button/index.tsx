import { IButtonProps } from '../../types';
import './styles.scss';

export const Button = (
  { children,
    type,
    onClick
  }: IButtonProps) => {
   

  return (
    <button 
    className={`btn ${type}`} 
    onClick={onClick}
    >
      {children}
    </button>
  );
};







