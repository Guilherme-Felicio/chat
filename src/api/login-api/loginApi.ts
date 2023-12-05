import api from "../base-api";
import {
  ICreateUserRequest,
  ICreateUserResponse,
  IDefaultResponse,
  ILoginResponse,
} from "./interfaces/login-interfaces";

class LoginApi {
  static async createUser(user: ICreateUserRequest) {
    const response = api.post<ICreateUserResponse>("user/signup", user);
    return response;
  }

  static async activateAccount(token: string) {
    const response = api.get<IDefaultResponse<unknown>>(
      `user/validate?token=${token}`
    );
    return response;
  }

  static async login(email: string, password: string) {
    const response = api.post<ILoginResponse>(`user/login`, {
      email,
      password,
    });
    return response;
  }
}

export default LoginApi;
