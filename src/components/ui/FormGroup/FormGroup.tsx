import ErrorMessage from '../ErrorMessage/ErrorMessage';
import styles from './FormGroup.module.css';

interface FormGroupProps {
  children: React.ReactNode;
  error?: string;
}

const FormGroup = (props: FormGroupProps) => {
  const { children, error } = props;

  return (
    <div className={styles['form-group']}>
      {children}
      {error && <ErrorMessage message={error || ''} />}
    </div>
  )
}

export default FormGroup;