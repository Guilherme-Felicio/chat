import api from "../base-api";
import {
  ICreateUserRequest,
  ICreateUserResponse,
  IDefaultResponse,
} from "./interfaces/login-interfaces";

class LoginApi {
  static async createUser(user: ICreateUserRequest) {
    const response = api.post<ICreateUserResponse>("user/signup", user);
    return response;
  }

  static async activateAccount(token: string) {
    const response = api.get<IDefaultResponse>(`user/validate?token=${token}`);
    return response;
  }
}

export default LoginApi;
