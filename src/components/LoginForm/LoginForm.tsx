import { useForm } from 'react-hook-form'
import type { ValidationLoginSchema } from '../../schemas/validationSchemas';
import { validationLoginSchema } from '../../schemas/validationSchemas';
import { zodResolver } from "@hookform/resolvers/zod"
import { authStore } from '../../stores/AuthStore';
import { loginUser } from '../../utils/api';
import MainForm from '../MainForm/MainForm';
import Button from '../ui/Button/Button';
import InputField from '../ui/InputField/InputField';
import FormGroup from '../ui/FormGroup/FormGroup';

const LoginForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationLoginSchema>({
    resolver: zodResolver(validationLoginSchema),
  })

  const onSubmit = async (data: ValidationLoginSchema) => {
    authStore.setLoading(true);
    await loginUser(data.email, data.password);
    authStore.setLoading(false);
    authStore.setAuth(true);
  }

  const handleResetPassword = () => {
    authStore.switchView('resetPassword');
  }

  return (
    <MainForm submitHandler={handleSubmit(onSubmit)} title="Войти">
      {authStore.isAuth && <p>Вы успешно авторизовались</p>}
      <FormGroup error={errors.email?.message}>
        <InputField type='email' placeholder="Email*" name="email" register={register} />
      </FormGroup>
      
      <FormGroup error={errors.password?.message}>
        <InputField type='password' placeholder="Пароль*" name="password" register={register} />
      </FormGroup>
      <Button text="Войти" isDisabled={authStore.isLoading} />
      <Button text="Забыли пароль?" handlerClick={handleResetPassword} type="secondary" />
    </MainForm>
  )
}

export default LoginForm;