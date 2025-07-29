import styles from './MainForm.module.css';

interface MainFormProps {
  children: React.ReactNode;
  submitHandler?: (data: any) => void;
  title?: string;
}

const MainForm = (props: MainFormProps) => {
  const { children, submitHandler, title } = props;

  return (
    <form className={styles['form-main']} onSubmit={submitHandler} noValidate>
      {title && <p className={styles['form-main__title']}>{title}</p>}
      {children}
    </form>
  )
}

export default MainForm;