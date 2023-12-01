import api from "../base-api";
import {
  ICreateUserRequest,
  ICreateUserResponse,
} from "./interfaces/login-interfaces";

class LoginApi {
  static async createUser(user: ICreateUserRequest) {
    const response = api.post<ICreateUserResponse>("/signup", user);
    return response;
  }
}

export default LoginApi;
