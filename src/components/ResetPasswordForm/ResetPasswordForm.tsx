import { useForm } from 'react-hook-form'
import type { ValidationResetSchema } from '../../schemas/validationSchemas';
import { validationResetSchema } from '../../schemas/validationSchemas';
import { zodResolver } from "@hookform/resolvers/zod"
import { authStore } from '../../stores/AuthStore';
import MainForm from '../MainForm/MainForm';
import Button from '../ui/Button/Button';
import InputField from '../ui/InputField/InputField';
import FormGroup from '../ui/FormGroup/FormGroup';
import { resetPassword } from '../../utils/api';

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationResetSchema>({
    resolver: zodResolver(validationResetSchema),
  });
  
  const onSubmit = async (data: ValidationResetSchema) => {
    authStore.setLoading(true);
    await resetPassword(data.email);
    authStore.setLoading(false);
    authStore.setSendEmail(true);
  }

  const handleToLogin = () => {
    authStore.switchView('login');
  }

  return (
    <MainForm submitHandler={handleSubmit(onSubmit)} title="Восстановление пароля">
      {authStore.isSendEmail && <p>На вашу почту отправлено сообщение</p>}
      <FormGroup error={errors.email?.message}>
        <InputField type='email' placeholder="Email*" name="email" register={register} />
      </FormGroup>
      <Button text="Отправить" isDisabled={authStore.isLoading} />
      <Button text="Вернуться к входу" handlerClick={handleToLogin} type="secondary" />
    </MainForm>
  )
}

export default ResetPasswordForm;