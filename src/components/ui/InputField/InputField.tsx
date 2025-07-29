import styles from './InputField.module.css';

interface InputFieldProps {
  type?: string;
  placeholder?: string;
  name: string;
  register?: any;
}

const InputField = (props: InputFieldProps) => {
  const { type, placeholder, name, register } = props;

  return (
    <input 
      type={type || 'text'} 
      name={name} 
      placeholder={placeholder} 
      className={styles['input-main']}
      {...(register && register(name))}
    />
  );
}

export default InputField;