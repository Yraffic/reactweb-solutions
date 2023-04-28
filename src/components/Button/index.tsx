import { ButtonProps } from '../../types';
import './styles.scss'

export const Button = ({children, ...props }: ButtonProps) => {
  return (
    <button className='btn-primary' {...props}>
      {children}
    </button>
  );
};







