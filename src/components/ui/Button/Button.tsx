import cn from 'classnames';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  handlerClick?: () => void;
  type?: string;
  isDisabled?: boolean;
}

const Button = (props: ButtonProps) => {

  const { text, handlerClick, type, isDisabled } = props;
  return (
    <button disabled={isDisabled} className={cn(styles['button-main'], styles[`button-main__${type}`], { [styles['button-main__disabled']]: isDisabled })} onClick={handlerClick}>
      {text}
    </button>
  )
}

export default Button;