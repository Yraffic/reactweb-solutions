import { ButtonProps } from '../../types';
import './styles.scss';

export const Button = (
  { children,
    type,
    ...props
  }: ButtonProps) => {
   

  return (
    <button className={`btn ${type}`} {...props}>
      {children}
    </button>
  );
};







