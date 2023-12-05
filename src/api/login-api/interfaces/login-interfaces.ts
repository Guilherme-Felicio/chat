import { IUser } from "../../../interfaces/user";

export interface ICreateUserRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ICreateUserResponse {
  created: boolean;
  user: IUser;
}

export interface IDefaultResponse<T> {
  message: string;
  body?: T;
}
export interface ILoginResponse {
  message: string;
  token: string;
}
