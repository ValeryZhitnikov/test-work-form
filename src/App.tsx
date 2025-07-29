import { observer } from "mobx-react-lite";
import { authStore } from './stores/AuthStore';
import LoginForm from './components/LoginForm/LoginForm';
import ResetPasswordForm from './components/ResetPasswordForm/ResetPasswordForm';

const App = observer( () => {
  const renderContent = (viewType: string) => {
    switch (viewType) {
      case 'login':
        return <LoginForm />;
      case 'resetPassword':
        return <ResetPasswordForm />;
      default:
        return <LoginForm />;
    }
  };

  return (
    <>
      {renderContent(authStore.viewType)}
    </>
  )
})

export default App
