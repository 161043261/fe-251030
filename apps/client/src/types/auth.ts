export interface ILoginData {
  username: string;
  password: string;
}

export interface IRegisterData extends ILoginData {
  captcha?: string;
}
