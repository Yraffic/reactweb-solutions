import { IButtonProps } from '../../types';
import './styles.scss';

export const Button = (
  { children,
    type,
    ...props
  }: IButtonProps) => {
   

  return (
    <button className={`btn ${type}`} {...props}>
      {children}
    </button>
  );
};







