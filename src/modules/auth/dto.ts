export interface IUserCredential {
  username: string;
  password: string;
  fullName?: string;
  email?: string;
}

export interface ILoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}
