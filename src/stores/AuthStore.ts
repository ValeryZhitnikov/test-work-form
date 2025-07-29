import { makeAutoObservable } from 'mobx';

class AuthStore {

  viewType = 'login';
  isLoading = false;
  isAuth = false;
  isSendEmail = false;

  constructor() {
    makeAutoObservable(this);
  }

  switchView(viewType: string) {
    this.viewType = viewType;
  }

  setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setAuth(isAuth: boolean) {
    this.isAuth = isAuth;
  }

  setSendEmail(isSendEmail: boolean) {
    this.isSendEmail = isSendEmail;
  }

}

export const authStore = new AuthStore();