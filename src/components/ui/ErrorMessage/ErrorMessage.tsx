import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = (props: ErrorMessageProps) => {
  const { message } = props;

  return (
    <div className={styles['error-message']}>
      {message}
    </div>
  )
}

export default ErrorMessage;